import express from "express";
import {port} from './config/config.js'
import connectDB from "./config/db.js";
import chalk from 'chalk'

const app = express();


const PORT = port || 4000
connectDB()
app.listen(PORT, () => {
  console.log(`${chalk.green.bold('Server')} running on ${chalk.green.bold(port)}`)
})

