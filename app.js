const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(req , res){
    console.log("servier is working on port 3000")
});


app.get("/", function(req, res){
    res.render("home", {

    });
});

app.get("/news", (req, res) =>{
    res.render("news");
});

app.get("/start", (req, res) =>{
    res.render("start");
});

app.get("/about", (req, res) =>{
    res.render("about");
});