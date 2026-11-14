import fs from 'fs';
import pg from 'pg';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();
const { Pool } = pg;

// SSL only when DB_SSL=true (on AWS). Locally it stays off.
const ssl =
  process.env.DB_SSL === 'true'
    ? { rejectUnauthorized: true, ca: fs.readFileSync(process.env.DB_SSL_CA_PATH, 'utf8') }
    : false;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME || 'realestateai',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  ssl,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

pool.on('error', (err) => console.error(chalk.red('Idle DB client error:'), err.message));

const connectDB = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT current_database(), current_user');
    client.release();
    console.log(chalk.green.bold(`🏡 DB ready: ${res.rows[0].current_database} as ${res.rows[0].current_user} | SSL: ${ssl ? 'verified' : 'off (local)'}`));
  } catch (error) {
    console.error(chalk.red.bold('❌ PostgreSQL connection failed:'), error.message);
    process.exit(1);
  }
};

export { pool };
export default connectDB;