//testing http
const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url, req.method)

    // set header content type
    res.setHeader("Content-Type","text/html")
    res.write ("<head>hello, peron</head>")
    res.write ("<p>hello, agustin</p>")
    res.write ("<p>hello, peron</p>")
    res.end()
})

const PORT = 3000

server.listen(PORT, "localhost", () => {
    console.log(`listening on port ${PORT}`)
})