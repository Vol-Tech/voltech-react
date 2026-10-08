require('dotenv').config();

// aca va la config global y conexiones a otro servicios externos

const { Pool } = require('pg');

const conexionBD = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = conexionBD;