const jwt = require("jsonwebtoken");

const secretKey = "1234";

const loginHandler = (req, res) => {
    const user = {
        id:1,
        name: "emmanuel",
        email: "emmanuelcafu@gmail.com"
    }
    jwt.sign({user}, "secretkey",(err, token)=>{
        res.json({
            token
        })
    })
};

const getloginventas = (req,res)=>{
        res.send("estamso en el getVentas")
}


const  loginHandlerpost=(req,res)=>{
   jwt.verify(req.token, "secretkey",(error,authDta)=>{
    if(error){
        res.status(403);
    }else{
        res.json({
            mensaje:"post creado",
            authDta
        })
    }
   })
}

function validateToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    // ojo  Authorization: Bearer <token>
      if(typeof bearerHeader !== "undefined"){
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
      }else{
        res.status(403);
      }
  }
module.exports = { loginHandler,getloginventas,loginHandlerpost ,validateToken};
