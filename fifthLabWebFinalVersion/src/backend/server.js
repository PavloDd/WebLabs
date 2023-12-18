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

app.get('/zoos', (req, res) => {
  pool.query('SELECT * FROM zoos_info', (error, results) => {
    if (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
      return;
    }
    
    res.status(200).json(results.rows);
  });
});

app.use(express.json());

app.post('/insert-zoo', (req, res) => {
  const { title, description, cost, location } = req.body;

  // Perform database insertion here using the captured data
  pool.query(
    'INSERT INTO zoos_info (title, description, cost, location) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, cost, location],
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

app.delete('/delete-zoo/:zooId', (req, res) => {
  const zooId = req.params.zooId;

  const deleteQuery = 'DELETE FROM zoos_info WHERE id = $1';
  pool.query(deleteQuery, [zooId], (error, results) => {
    if (error) {
      console.error('Error deleting data:', error);
      res.status(500).json({ error: 'An error occurred while deleting data.' });
    } else {
      res.status(200).json({ message: 'Data deleted successfully' });
    }
  });
});

app.put('/save-edits/:zooId', (req, res) => {
  const zooId = req.params.zooId
  const { title, description, cost, location } = req.body;

  const updateQuery = 'UPDATE zoos_info SET title = $1, description = $2, cost = $3, location = $4 WHERE id = $5 RETURNING *';
  pool.query(updateQuery, [title, description, cost, location, zooId], (error, results) => {
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