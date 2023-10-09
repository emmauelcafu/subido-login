const {Sequelize, DataTypes}= require("sequelize");
const sequelize = require("../db");

const Usuario = sequelize.define("usuario",{
    name:{
        type: DataTypes.STRING,
        allowNull:false,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    gmail:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports =Usuario;