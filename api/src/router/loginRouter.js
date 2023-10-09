const { Router } = require("express");
const { loginHandler, getloginventas ,loginHandlerpost,validateToken } = require("../handler/loginHandler");
// const validateToken = require("../middleware/token");

const loginRouter = Router();

loginRouter.post("/", loginHandler);
loginRouter.post("/posts",validateToken,loginHandlerpost);


loginRouter.get("/contenido",validateToken, getloginventas);

module.exports = loginRouter;
