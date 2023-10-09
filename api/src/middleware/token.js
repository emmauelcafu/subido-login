// const jwt = require("jsonwebtoken");

// const secretKey = "1234";

// function validateToken(req, res, next) {
//   const bearerHeader = req.headers["authorization"];
//   // ojo  Authorization: Bearer <token>
//     if(typeof bearerHeader !== "undefined"){
//       const bearerToken = bearerHeader.split(" ")[1];
//       req.token = bearerToken;
//       next();
//     }else{
//       res.status(403);
//     }
// }

// module.exports = validateToken;
