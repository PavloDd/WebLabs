// const express = require("express");
// const zooRouter = require("./routes/zoo.routes");
// const cors = require('cors');
// const app = express();



  
// app.use(express.static("public"));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
//   });
// app.use(cors({
//   origin: 'http://127.0.0.1:5500',
//   methods: 'POST,PUT,GET,OPTIONS',  // Allow the specified methods
//   allowedHeaders: ['Content-Type']  // Add any other required headers here
// }));
// app.use("/css", express.static(__dirname + "public/css"));
// app.use("/js", express.static(__dirname + "public/js"));
// app.use(express.json());
// app.use("/api", zooRouter);
// app.get("", (req, res) => {
//     res.sendFile(__dirname + '/views/index.html');
// });
// app.listen(5500, ()=>{
//     console.log("http://127.0.0.1:5500");
// });

const express = require("express");
const path = require("path");
const zooRouter = require("./routes/zoo.routes");
const cors = require('cors');
const app = express();
const db = require('./db'); // Підключення до бази даних

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Enable CORS for all routes
app.use(cors());

// Serve CSS and JS files
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));

// Parse JSON requests
app.use(express.json());

// Функція для очищення таблиці, якщо вона не порожня
const clearDatabaseIfNotEmpty = async () => {
    try {
        const result = await db.query('SELECT COUNT(*) as count FROM zoos');
        const rowCount = result[0].count;

        if (rowCount > 0) {
            // Таблиця не порожня, видалити всі записи
            await db.query('DELETE FROM zoos');
            console.log('Table cleared successfully.');
        } else {
            console.log('Table is already empty.');
        }
    } catch (error) {
        console.error('Error clearing the database:', error);
    }
};

// Викликати функцію очищення бази даних перед запуском сервера
clearDatabaseIfNotEmpty();

// Use the zooRouter for API routes
app.use("/api", zooRouter);

// Serve the main HTML file
app.get("", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server on port 5500
const PORT = 5501;
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});

