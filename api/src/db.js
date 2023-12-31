const {Sequelize} = require("sequelize");
require("dotenv").config();
const{
    DB_USER,DB_PASSWORD,DB_HOST,DB_NAME
}= process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,{
    logging: false, // set to console.log to see the raw SQL queries
  native: false,
});


module.exports= sequelize;