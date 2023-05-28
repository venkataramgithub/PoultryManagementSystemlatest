const express=require("express");
const cors=require("cors");
const bodyparser=require("body-parser");
const connection=require("./connection");
const poultryinsert=require("./poultryinsert");

const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/",poultryinsert);

const port=process.env.PORT||3000;
app.listen(port,()=>{
	console.log("This Application is running on the http://localhost:3000");
});
