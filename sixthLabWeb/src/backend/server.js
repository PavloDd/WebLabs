const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P132465798',
    database: 'penguin_paradise',
    port: 3306,
});

connection.connect(err => {
    if (err) {
        console.log('Error connecting to MySQL', err);
    }
    else {
        console.log('Connected to MySQL')
    }
});

app.get('/api/zoos', (req, res) => {
    const query = 'SELECT id, title, location, image, price, phone_number, rating FROM zoos';

    connection.query(query, (err, results) => {
        if(err) {
            console.error('Error execiting MySQL query:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            res.json(results)
        }
    });
});

app.post('/api/zoos/filter', (req, res) => {
    const { selectedValueCity, selectedValuePrice, searchText } = req.body;
    const searchTextTrimmed = (searchText || '').trim();

    let query = 'SELECT id, title, location, image, price, phone_number rating FROM zoos WHERE 1';
    if (selectedValueCity) {
        query += ` AND location = '${selectedValueCity}'`;
    }

    if (selectedValuePrice) {
        query += ` AND price <'${selectedValuePrice}'`;
    }

    if (searchTextTrimmed != '') {
        query += ` AND title LIKE '${searchTextTrimmed}'`;
    }
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.json(results);
        }
    });

})

app.listen(port, () => {
    console.log("Server is running on port ${port}");
});
