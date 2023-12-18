const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Lab_5',
  password: 'P132465798',
  port: 5432,
});

app.use(cors());

app.get('/plates', (req, res) => {
  pool.query('SELECT * FROM plate_creation_info', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
      return;
    }
    
    res.status(200).json(results.rows);
  });
});

app.use(express.json());

app.post('/insert-plate', (req, res) => {
  const { title, description, cost, type } = req.body;

  // Perform database insertion here using the captured data
  pool.query(
    'INSERT INTO plate_creation_info (title, description, cost, plate_type) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, cost, type],
    (error, results) => {
      if (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ error: 'An error occurred while inserting data.' });
      } else {
        const insertedData = results.rows[0];
        res.status(201).json({ message: 'Data inserted successfully', data: insertedData });
      }
    }
  );
});

app.delete('/delete-plate/:plateId', (req, res) => {
  const plateId = req.params.plateId;

  const deleteQuery = 'DELETE FROM plate_creation_info WHERE id = $1';
  pool.query(deleteQuery, [plateId], (error, results) => {
    if (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'An error occurred while deleting data.' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  });
});

app.put('/save-edits/:plateId', (req, res) => {
  const plateId = req.params.plateId
  const { title, description, cost, type } = req.body;

  const updateQuery = 'UPDATE plate_creation_info SET title = $1, description = $2, cost = $3, plate_type = $4 WHERE id = $5 RETURNING *';
  pool.query(updateQuery, [title, description, cost, type, plateId], (error, results) => {
    if (error) {
      console.error('Error updating data:', error);
      res.status(500).json({ error: 'An error occurred while updating data.' });
    } else {
      const updatedData = results.rows[0];
      res.status(200).json({ message: 'Data updated successfully', data: updatedData });
    }
  });
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});