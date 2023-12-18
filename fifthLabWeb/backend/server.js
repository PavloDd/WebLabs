const express = require("express");
const mysql = require("mysql2");
const multer = require("multer");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P132465798",
    database: "web_lab_5",
    // insecureAuth: true,
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
        return;
    }
    console.log("Connected to MySQL");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/api/zoos", upload.single("file"), (req, res) => {
  db.query("SELECT * FROM zoos", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error retrieving data from the database");
    } else {
      res.json(results);
    }
  });
});

app.post("/api/zoos", upload.single("file"), (req, res) => {
  const { name, location, area, capacity } = req.body;
  db.query(
    "INSERT INTO zoos ( name, location, area, capacity) VALUES (?, ?, ?, ?)",
    [ name, location, area, capacity],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error inserting data into the database");
      } else {
        res.status(201).json({ id: result.insertId });
      }
    }
  );
});

app.put("/api/zoos/:id", upload.single("file"), (req, res) => {
  const { id } = req.params;
  const { name, location, area, capacity } = req.body;
  db.query(
    "UPDATE zoos SET name = ?, location = ?, area = ?, capacity = ? WHERE id = ?",
    [name, location, area, capacity, id],
    (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res.status(500).send("Error updating data in the database");
      } else {
        res.json({ message: "Zoo updated successfully" });
      }
    }
  );
});

app.delete("/api/zoos/:id", upload.single("file"), (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM zoos WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).send("Error deleting data from the database");
    } else {
      res.json({ message: "Zoo deleted successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
