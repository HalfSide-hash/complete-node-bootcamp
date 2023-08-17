const path = require("path");
const fs = require('fs');
const http = require('http');
const url = require('url');

//FILES
//Synchronous way
// const textIn = fs.readFileSync(path.resolve(__dirname,'./final/txt/input.txt'), 'utf-8');

// const textOut = `Avacados are wild ${textIn}\nCreated On: ${Date.now()}`;

// fs.writeFileSync(path.resolve(__dirname,'./final/txt/output.txt'), textOut);

// console.log('file written');

//Async way
/* fs.readFile(path.resolve(__dirname,'./final/txt/start.txt'), 'utf-8', (err,data) => {
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

console.log('reading first'); */

///////////////////////////
// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) =>{
    console.log(req.url);
    const pathName = req.url;
    if (pathName === '/' || pathName === '/overview'){
        res.end('We OVERVIEWING BOIS with KENERGY');
    }
    else if (pathName === '/product'){
            res.end('We PRODUCTING BOIS');
    }
    else if(pathName === '/api'){
        res.writeHead(200, {
            'Content-type' : 'application/json'
        });
        res.end(data);

    } 
    else{
        res.writeHead(404, {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not found</h1>');
    }
    //res.end('The server talkin');
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to requests on port 8000');
});

