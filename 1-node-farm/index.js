const path = require("path");
const fs = require('fs');

//Synchronous way
// const textIn = fs.readFileSync(path.resolve(__dirname,'./final/txt/input.txt'), 'utf-8');

// const textOut = `Avacados are wild ${textIn}\nCreated On: ${Date.now()}`;

// fs.writeFileSync(path.resolve(__dirname,'./final/txt/output.txt'), textOut);

// console.log('file written');

//Async way
fs.readFile(path.resolve(__dirname,'./final/txt/start.txt'), 'utf-8', (err,data) => {
    if (err) return console.log('this didnt work sry');
    fs.readFile(path.resolve(__dirname,`./final/txt/${data}.txt`), 'utf-8', (err,data2) => {
        console.log(data2);
        fs.readFile(path.resolve(__dirname,`./final/txt/append.txt`), 'utf-8', (err,data3) => {
            console.log(data3);
            fs.writeFile(path.resolve(__dirname,`./final/txt/final.txt`), `${data2}\n${data3}\nWritten On: ${Date.now()}`, 'utf-8', err => {
                console.log('written boi test');
            });
        });
    });
});

console.log('reading first');