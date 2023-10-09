const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cors = require("cors");
const sequelize = require("./src/db");
const Usuario = require("./src/models/registro");

const app = express();
const PORT = 3001;
const llavesecreta = "ojonadiedebesaber";

app.use(bodyParser.json());
app.use(cors());

app.get("/datos", validacionToken, (req, res) => {
  jwt.verify(req.token, llavesecreta, (error, authData) => {
    if (error) {
      res.send("Tienes que autenticarte");
    } else {
      res.json({
        mensaje: "Post fue creado",
        authData: authData,
      });
    }
  });
});

// app.post("/datos/login", (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   // Verifica las credenciales aquí (username y password)

//   if (username === "emmanuel" && password === "emmanuel123") {
//     jwt.sign(
//       { username, password },llavesecreta,{ expiresIn: "30s" },(err, token) => {
//         if (err) {
//           res.status(400).json({ msg: "Error al generar el token" });
//         } else {
//           res.json({ msg: "Inicio de sesión exitoso", token: token });
//         }
//       }
//     );
//   } else {
//     res.status(401).json({ msg: "Credenciales incorrectas" });
//   }
// });
app.post("/datos/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    // Buscar un usuario en la base de datos que coincida con el nombre de usuario proporcionado
    const user = await Usuario.findOne({ where: { name: username } });

    // Si no se encuentra un usuario, responder con credenciales incorrectas
    if (!user) {
      return res.status(401).json({ msg: "Credenciales incorrectas" });
    }

    // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos
    if (password === user.password) {
      jwt.sign(
        { username, password }, llavesecreta, { expiresIn: "30s" }, (err, token) => {
          if (err) {
            res.status(400).json({ msg: "Error al generar el token" });
          } else {
            res.json({ msg: "Inicio de sesión exitoso", token: token });
          }
        }
      );
    } else {
      // Contraseña incorrecta
      res.status(401).json({ msg: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al iniciar sesión" });
  }
});


app.post("/registrar", async(req,res)=>{

    try {
      const {name, password,gmail}= req.body;

      const user= await Usuario.create({name,password,gmail});
      res.json({message:"Usuario creado",user});

    } catch (error) {
      console.log(error)
      res.status(500).json({message:"Error al registro usuario"});
    }
})



// Middleware para validar el token
function validacionToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    req.token = token;
    next();
  } else {
    res.status(403).json({ msg: "Acceso no autorizado" });
  }
}




(async () => {
  try {
    await sequelize.sync({force: true}); // Esto creará las tablas si no existen
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
})();




app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
