const http = require('http');
const fs = require('fs');
const port = 3400;


// const server = http.createServer((req,res)=>{
//     res.end(`<h2>Hello Adarsh! Congratulation! You have done it with node</h2>`);
//     // res.end('End The Request');
// });


const server = http.createServer((req,res)=>{
    res.setHeader("Content-type",'text/html');
    var page;
    if(req.url=='/'){
        // res.end("<h1>Home Page</h1>");
        const page = fs.readFileSync("home.html");
        res.end(page);
    }else if(req.url=='/about'){
        const page = fs.readFileSync("about.html");
        res.end(page);
    }else if(req.url=='/contact'){
        const page = fs.readFileSync("contact.html");
        res.end(page);
    }
    
});

server.listen(port,()=>{
    console.log("server started");
});