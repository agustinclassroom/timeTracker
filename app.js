const express = require("express");
const mongoose = require("mongoose");

const mongoURI = require("./mongoDB.js");

const Log = require("./models/timeLog");
const app = express();
const PORT = 3000



const dbURI = mongoURI
mongoose.connect(dbURI)
    .then((result) => { 
        app.listen(PORT)
        console.log("connected to db")})
    .catch((err) => console.log(err));

app.set("view engine", "ejs");



// middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded());
// db handling and receiving

app.post("/", (req,res) => {
    console.log(req.body)
    const log = new Log(req.body)
    log.save()
        .then((result) =>{
            res.redirect("/");

        })
        .catch((err) => { console.log(err)});
    
});


// pages
app.get("/", (req,res) => {
    // res.send("<p>home page</p>");
    // res.sendFile("./test.html", { root: __dirname})
    res.render("index", { title: "Home" });
});
app.get("/graphs", (req,res) => {

    // res.send("<p>home page</p>");
    // res.sendFile("./test.html", { root: __dirname})
    res.render("graphs",{ title: "Graphs" })
});

app.use((req,res) => {
    res.status(404).render("404",{ title: "404" })
})