import express from "express";
import { dbConnect } from "./dbConnect.js";
import route from "./teachers/teachers.route.js";
const app=express()
app.use(express.json())
app.use(route)
dbConnect()

const port=6700

app.listen(port,(req,res)=>{
    console.log(`app is listening on port ${port}`)
})