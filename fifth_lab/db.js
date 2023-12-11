// db.js

const mysql = require('mysql2');

const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: 'P132465798',
    database: 'zoos',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

pool.on('connection', (connection) => {
    console.log('Connected to MySQL database');
});

pool.on('acquire', (connection) => {
    console.log('Connection acquired:', connection.threadId);
});

pool.on('release', (connection) => {
    console.log('Connection released:', connection.threadId);
});

// Функція для виконання запиту до бази даних
function executeSampleQuery() {
    pool.query('SELECT * FROM zoos', (error, results) => {
        if (error) {
            console.error('Error querying MySQL:', error);
            return;
        }

        console.log('Query results:', results);
    });
}

// Виклик функції для виконання запиту при отриманні з'єднання
pool.on('connection', (connection) => {
    console.log('Connected to MySQL database');
    // executeSampleQuery();
});

module.exports = pool.promise();

