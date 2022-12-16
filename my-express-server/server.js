

//jshint esversion:6
const express = require("express");

const bodyParser= require("body-parser");
 const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/", function(req,res){
  var h = Number(req.body.Height);
  var w = Number(req.body.Weight);
  var result =  (w)/(h*h);
    res.send("The  result of calcualation is "+ result);
    console.log(result);
});

app.listen(3000,function(){
  console.log("Server started on port 3000");
});
