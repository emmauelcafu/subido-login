const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/db");
const router = require("./src/router/index")

const app = express();
const PORT = 3001;


app.use(bodyParser.json());
app.use(cors());

app.use("/",router);
//bd conexion con el backend
(async () => {
  try {
    await sequelize.sync({force: false}); // Esto creará las tablas si no existen
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();




app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
