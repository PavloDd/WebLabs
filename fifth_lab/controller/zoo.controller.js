const db = require("../db");

class ZooController{
    async createZoo(req, res) {
    const { name, location, area, capacity } = req.body;
    
    // Виконати запит на вставку і отримання останнього вставленого ID
    const newZooId = await db.query(
        `INSERT INTO zoos (name, location, area, capacity) VALUES (?, ?, ?, ?)`,
        [name, location, area, capacity]
    );

    // Виконати окремий запит для отримання даних про новий зоопарк за допомогою останнього вставленого ID
    try {
        const newZooData = await db.query(
            `SELECT * FROM zoos WHERE id = LAST_INSERT_ID()`
        );

        // Перевірити, чи є результати запиту
        if (newZooData.rows && newZooData.rows.length > 0) {
            res.json(newZooData.rows[0]);
        } else {
            res.status(500).json({ error: 'Помилка отримання даних про новий зоопарк' });
        }
    } catch (error) {
        console.error('Помилка отримання даних з бази даних:', error);
        res.status(500).json({ error: 'Помилка отримання даних з бази даних' });
    }
}

    async getAllZoo(req, res) {
        try {
        const allZoos = await db.query(`SELECT * FROM zoos`);
        res.json(allZoos.rows);
    } catch (error) {
        console.error('Помилка отримання даних з бази даних:', error);
        res.status(500).json({ error: 'Помилка отримання даних з бази даних' });
    }
    }

    async getOneZoo(req, res){
        const id = req.params.id;
        const oneZoo = await db.query(
            `SELECT * FROM zoos WHERE id=$1`,
            [id]
        );
        res.json(oneZoo.rows[0]);
    }
    async getSortedZoo(req, res){
    try {
        const sortedZoos = await db.query(
            `SELECT * FROM zoos ORDER BY area`
        );
        res.json(sortedZoos.rows);
    } catch (error) {
        console.error('Error querying MySQL:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

    async updateZoo(req, res){
        const {id,name, location, area, capacity} = req.body;
        const updateZoo = await db.query(
            `UPDATE zoos SET name = ?, location = ?, area = ?, capacity = ? WHERE id= ? RETURNING *`,
            [name, location, area, capacity, id]
        );
        res.json(updateZoo.rows[0]);
    }
    async deleteZoo(req, res){
        const id = req.params.id;
        const deleteZoo = await db.query(
            `DELETE FROM zoos WHERE id = $1`,
            [id]
        );
        res.json(deleteZoo.rows[0]);
    }
}

module.exports = new ZooController();    