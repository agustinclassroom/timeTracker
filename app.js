const express = require("express");

const app = express();

app.set("view engine", "ejs") 


const PORT = 3000

app.listen(PORT);


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