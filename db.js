const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres', // Use your PostgreSQL username
    host: 'localhost',
    database: 'dinner_is_ready',
    password: 'iammunak12', // Use your PostgreSQL password
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};
