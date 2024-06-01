const express=require("express");
const fileroutes=require("./routes/file")

const app=express();
app.use(fileroutes);
app.listen(10000,()=>console.log("app is running on port 10000"));