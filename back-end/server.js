//testing http
const http = require('http');
const fs = require("fs")

const server = http.createServer((req,res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader("Content-Type","text/html")
    fs.readFile("./test.html",(err,data) => {
        if (err) { 
            console.log(err);
            res.end();
        } else {
            // res.write(data);
            res.end(data);
        }
    })
})

const PORT = 3000

server.listen(PORT, "localhost", () => {
    console.log(`listening on port ${PORT}`)
})