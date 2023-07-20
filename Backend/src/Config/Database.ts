import { Sequelize } from 'sequelize'
import path from 'path'
require("dotenv").config({path: path.resolve(__dirname, "../../.env")})
console.log(process.env.USER)
export const conn =  new Sequelize({
    database: process.env.DATABASE ,
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    dialect: "mysql"
})
