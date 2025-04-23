import mongoose from 'mongoose';
import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
      dbName: "realestateai"
    });
    
    console.log(chalk.green.bold(`
    ===========================================
     🏡 RealEstateAI Database Connection Ready
     -------------------------------------------
     Cluster: ${chalk.cyan(conn.connection.host)}
     Database: ${chalk.cyan(conn.connection.name)}
     Status: ${chalk.green('ACTIVE')}
    ===========================================
    `));
    
  } catch (error) {
    console.error(chalk.red.bold('❌ Database connection failed:'));
    console.error(chalk.red(`- Error: ${error.message}`));
    process.exit(1);
  }
};

export default connectDB;