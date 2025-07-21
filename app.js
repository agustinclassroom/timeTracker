const express = require("express");

const app = express();

const PORT = 3000


app.listen(PORT);


app.get("/", (req,res) => {

    // res.send("<p>home page</p>");
    res.sendFile("./test.html", { root: __dirname})
});

