var express = require("express");
var bodyParser = require("express");
var request = require("request");


var app=express();

app.get("/", function(request, result){
  result.sendFile(__dirname + "/signup.html");
})

app.use(express.static("assets"));

app.listen(3000, function(){
  console.log("Server is running on port 3000");
})
