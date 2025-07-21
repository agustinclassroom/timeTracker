// testing modules!

// const os = require('os')

// console.log(os.homedir(), os.platform())


// testing fs 
const fs = require('fs');

// reading files
fs.readFile('./data/text-file.txt', (err,data) => {
    if (err) {
        console.log(err)
    }
    console.log(data.toString());
});

console.log("readFile is async, so this will be read first.")

// writing files

fs.writeFile("./data/text-file.txt", "Hello, world!", () => {
    console.log("File was written")
});

