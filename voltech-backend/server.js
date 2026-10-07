require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Servidor backend en puerto ${PORT}`));