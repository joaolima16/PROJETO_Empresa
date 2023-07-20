import { conn } from "../Config/Database";
import sequelize from "sequelize";

export const ConstructionSchema = conn.define("obra", {
    id:{
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },

    obra: {
        type: sequelize.STRING(50),
        allowNull: false
    },
    
    contrato: {
        type: sequelize.STRING(20),
        allowNull: false
    },
    
    contratante: {
        type: sequelize.STRING(30),
        allowNull: false
    },
    
    resumo:{
        type: sequelize.STRING,
        allowNull: false
    },
    status:{
        type: sequelize.ENUM("FINALIZADA", "EM ANDAMENTO")
    }
})