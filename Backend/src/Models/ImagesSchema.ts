import sequelize from "sequelize";
import { conn } from "../Config/Database";

export const ImageSchema  = conn.define("images",{
    id:{
        type: sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    imageUrl:{
        type: sequelize.STRING,
        allowNull:false
    }
})