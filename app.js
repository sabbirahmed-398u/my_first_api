const express = require("express");
const router = require("./src/routes/api");
const app = new express();

// middleware security import
const ratelimit = require("exrpress-rate-limit")
const helmet = requrire("helmet");
const mongosantize = require("express-mongo-sanitize");
const xssclean = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors")

//security middleware implement

app.use(cors())
app.use(helmet())
app.use(mongosantize())
app.use(xss())
app.use(hpp())

// get request rate limiter 

// const limiter = ratelimit({
//     windowMs : 15*60*1000,
//     max : 100
// });
// app.use(limiter)

app.use("/api/v1", router)

module.exports= app;

app.use("*", (req,res)=>{
    res.status(404),json({status :"failed", data : "wrong request"})
})