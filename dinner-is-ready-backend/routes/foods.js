const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all food items
router.get('/', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM foods');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Add a new food item
router.post('/', async (req, res) => {
    try {
        const { name, image, price } = req.body;
        const result = await db.query(
            'INSERT INTO foods (name, image, price) VALUES ($1, $2, $3) RETURNING *',
            [name, image, price]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Delete a food item
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await db.query('DELETE FROM foods WHERE id = $1', [id]);
        res.sendStatus(204);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
