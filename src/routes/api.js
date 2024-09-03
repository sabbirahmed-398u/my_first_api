const express = require("express");
const router= express.Router();
const hellocontroler = require("../controllers/hellocontrollers");




router.get("/hello",hellocontroler.hello)

module.exports = router ;