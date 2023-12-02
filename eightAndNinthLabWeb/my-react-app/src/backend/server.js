const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'P132465798',
    database: 'penguin_paradise',
});

connection.connect(err => {
    if (err) {
        console.log('Error connecting to MySQL', err);
    }
    else {
        console.log('Connected to MySQL')
    }
});

app.get('/api/zoos', (res, req) => {
    const query = 'SELECT id, title, location, image, price FROM zoos';

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

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});
