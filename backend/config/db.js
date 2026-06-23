import pg from 'pg';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'realestateai',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT current_database(), current_user');
    client.release();

    console.log(chalk.green.bold(`
  ===========================================
   🏡 RealEstateAI Database Connection Ready
   -------------------------------------------
   Database: ${chalk.cyan(res.rows[0].current_database)}
   User: ${chalk.cyan(res.rows[0].current_user)}
   Status: ${chalk.green('ACTIVE ✓')}
  ===========================================
    `));
  } catch (error) {
    console.error(chalk.red.bold('❌ PostgreSQL connection failed:'));
    console.error(chalk.red(`- ${error.message}`));
    process.exit(1);
  }
};

export { pool };
export default connectDB;