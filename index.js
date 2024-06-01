const express=require("express");
const mongoose=require("mongoose");
const fileroutes=require("./routes/file")

const app=express();

app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/filesharing")
.then(() => console.log("DB Connection established successfully"))
.catch((err) => console.log("Error while connecting database", err));

app.use(fileroutes);
app.listen(10000,()=>console.log("app is running on port 10000"));