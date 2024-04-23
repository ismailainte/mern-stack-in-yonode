import mongoose from "mongoose";
import { dbUrl } from "./config.js";
import chalk from 'chalk'

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      
      
    });
    console.log(chalk.green.bold(`MongoDB Connected: ${conn.connection.host}`));
    
  } catch (err) {
    console.log(`${chalk.red.bold("Error")} Connection is ${chalk.red.bold("unsuccessful",err)}`)
  }
};

export default connectDB;
