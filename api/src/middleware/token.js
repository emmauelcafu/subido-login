const jwt = require("jsonwebtoken");


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
  
  module.exports={validacionToken};