
// const Pool = require('pg').Pool
// const pool = new Pool({
//     user: "postgres",
//     password: 'ZcNeid7k',
//     host: "localhost",
//     port: 5432,
//     database: "node_postgres"
// });

// module.exports = pool;

const mysql = require('mysql2');

// Конфігурація для підключення до бази даних
const dbConfig = {
    host: 'localhost',      // Хост бази даних
    user: "root",      // Користувач бази даних
    password: 'P132465798',  // Пароль користувача
    database: 'zoos'  // Назва бази даних
};

// Створення підключення до бази даних
const connection = mysql.createConnection(dbConfig);

// Встановлення з'єднання
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Здійснення запитів до бази даних

// Приклад: вибірка всіх записів з таблиці
connection.query('SELECT * zoos', (error, results) => {
    if (error) {
        console.error('Error querying MySQL:', error);
        return;
    }
    console.log('Query results:', results);
});

// Закриття з'єднання після виконання запитів
connection.end((err) => {
    if (err) {
        console.error('Error disconnecting from MySQL:', err);
        return;
    }
    console.log('Disconnected from MySQL database');
});
