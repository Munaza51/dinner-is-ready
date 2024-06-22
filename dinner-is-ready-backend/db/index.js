const express = require('express');
const cors = require('cors');
const db = require('../db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/foods', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM foods');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
    }
});

app.post('/api/rate', async (req, res) => {
    try {
        const { rating, feedback } = req.body;
        const result = await db.query('INSERT INTO feedback (rating, feedback) VALUES ($1, $2) RETURNING *', [rating, feedback]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
