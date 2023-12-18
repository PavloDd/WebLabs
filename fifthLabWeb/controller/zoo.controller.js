const db = require("../backend");

class ZooController {
    async createZoo(req, res) {
        const { name, location, area, capacity } = req.body;

        try {
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для вставки даних
            const result = await db.query(
                "INSERT INTO zoos (name, location, area, capacity) VALUES (?, ?, ?, ?)",
                [name, location, area, capacity]
            );

            // Замінив синтаксис PostgreSQL на синтаксис MySQL для отримання даних з бази за lastInsertId
            const newZooData = await db.query(
                "SELECT * FROM zoos WHERE id = ?",
                [result.insertId]
            );

            // Перевірка результатів запиту
            if (newZooData.length > 0) {
                res.json(newZooData[0]);
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
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для отримання всіх зоопарків
            const allZoos = await db.query("SELECT * FROM zoos");
            res.json(allZoos);
        } catch (error) {
            console.error('Помилка отримання даних з бази даних:', error);
            res.status(500).json({ error: 'Помилка отримання даних з бази даних' });
        }
    }

    async getOneZoo(req, res) {
        const id = req.params.id;

        try {
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для отримання одного зоопарку
            const oneZoo = await db.query("SELECT * FROM zoos WHERE id = ?", [id]);
            res.json(oneZoo[0]);
        } catch (error) {
            console.error('Помилка отримання даних з бази даних:', error);
            res.status(500).json({ error: 'Помилка отримання даних з бази даних' });
        }
    }

    async getSortedZoo(req, res) {
        try {
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для отримання відсортованих зоопарків
            const sortedZoos = await db.query("SELECT * FROM zoos ORDER BY area");
            res.json(sortedZoos);
        } catch (error) {
            console.error('Помилка отримання даних з бази даних:', error);
            res.status(500).json({ error: 'Помилка отримання даних з бази даних' });
        }
    }

    async updateZoo(req, res) {
        const { id, name, location, area, capacity } = req.body;

        try {
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для оновлення зоопарку
            const updateZoo = await db.query(
                "UPDATE zoos SET name = ?, location = ?, area = ?, capacity = ? WHERE id = ?",
                [name, location, area, capacity, id]
            );

            res.json(updateZoo);
        } catch (error) {
            console.error('Помилка оновлення даних в базі даних:', error);
            res.status(500).json({ error: 'Помилка оновлення даних в базі даних' });
        }
    }

    async deleteZoo(req, res) {
        const id = req.params.id;

        try {
            // Замінив синтаксис PostgreSQL на синтаксис MySQL для видалення зоопарку
            const deleteZoo = await db.query("DELETE FROM zoos WHERE id = ?", [id]);
            res.json(deleteZoo);
        } catch (error) {
            console.error('Помилка видалення даних з бази даних:', error);
            res.status(500).json({ error: 'Помилка видалення даних з бази даних' });
        }
    }
}

module.exports = new ZooController();
