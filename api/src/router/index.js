const { Router } = require("express");
const loginRouter = require ("../router/loginRouter")
// const cost = require("cost")
const router = Router()


//rutas
router.use("/login",loginRouter)



module.exports = router;