import 'dotenv/config';
import pg from 'pg';

// aca va la config global y conexiones a otro servicios externos
const { Pool } = pg;

const conexionBD = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

export default conexionBD;