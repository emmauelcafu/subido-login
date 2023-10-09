const {Sequelize} = require("sequelize");
require("dotenv").config();
const{
    DB_USER,DB_PASSWORD,DB_HOST
}= process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/login`,{
    logging: false, // set to console.log to see the raw SQL queries
  native: false,
});


module.exports= sequelize;