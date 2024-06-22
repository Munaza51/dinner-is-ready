const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = process.env.PORT || 3000; // Changed from 5000 to 3000

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
        res.status(500).send('Server Error');
    }
});

app.post('/api/rate', async (req, res) => {
    try {
        const { rating, feedback } = req.body;
        const result = await db.query('INSERT INTO feedback (rating, feedback) VALUES ($1, $2) RETURNING *', [rating, feedback]);
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
