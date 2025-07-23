const express = require("express");
const mongoose = require("mongoose");

const mongoURI = require("./mongoDB.js");
const app = express();
const PORT = 3000



const dbURI = mongoURI
mongoose.connect(dbURI)
    .then((result) => { 
        app.listen(PORT)
        console.log("connected to db")})
    .catch((err) => console.log(err));

app.set("view engine", "ejs") 





// middleware & static files
app.use(express.static("public"))


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