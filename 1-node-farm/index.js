const path = require("path");
const fs = require('fs');

fs.readFile(path.resolve(__dirname,'./final/txt/input.txt'), 'utf-8', (err,data) => {
    console.log(data);
});

console.log('Read that file dawg');

//const textOut = `Avacados are wild ${textIn}\nCreated On: ${Date.now()}`;

//fs.writeFileSync(path.resolve(__dirname,'./final/txt/output.txt'), textOut);

//console.log('file written')