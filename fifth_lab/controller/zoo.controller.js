const db = require("../db");

class ZooController{
    async createZoo(req, res) {
        const {name, location, area, capacity} = req.body;
        const newZoo = await db.query(
            `INSERT INTO zoos (name, location, area, capacity) VALUES
            ($1, $2, $3, $4)`, [name, location, area, capacity]

        );
        const responce = await db.query(`SELECT * FROM zoos`);
        res.json(responce.rows)
    }
    async getAllZoo(req, res) {
        const allZoos = await db.query(`SELECT * FROM zoos`);
        res.json(allZoos.rows);
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
        const sortedZoos = await db.query(
            `SELECT * FROM zoos ORDER BY area `
        );
        res.json(sortedZoos.rows)
    }
    async updateZoo(req, res){
        const {id,name, location, area, capacity} = req.body;
        const updateZoo = await db.query(
            `UPDATE zoos SET name = $1, location = $2, area = $3, capacity = $4 WHERE id= $5 RETURNING *`,
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