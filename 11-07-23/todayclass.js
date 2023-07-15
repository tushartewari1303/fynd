// example-1
// const http=require('http')
// const server=http.createServer((req,res)=>{
//     res.end('<h1>First Example of http</h1>')
// })
// server.listen(3400)


// eaxmple-2
// const http=require('http')
// const port=3400;
// const server=http.createServer((req,res)=>{
//     res.end('<h1>First Example of http</h1>')
// })
// server.listen(port)


// example-3
// const http=require('http')
// const port=3400;
// http.createServer((req,res)=>{
//     res.end('<h1>First Example of http using direct</h1>')
// }).listen(port)


// example-4
// const http=require('http')
// const port=3400;
// const server=http.createServer((req,res)=>{
//     res.end('<h1>First Example of http using direct</h1>')
// })
// server.listen(port,()=>{
//     try{
//         console.log(`server is listening at port number ${port}`);

//     }
//     catch(e){
//         console.log(e.message);
//     }
// })


// example-5
// const http=require('http')
// const port=3400;
// const server=http.createServer((req,res)=>{
//     res.write('<h1>First Example of http using write1</h1>')
//     res.write('<h1>First Example of http using write2</h1>')

//     res.end('<h1>First Example of http using write3</h1>')
//     // res.end('<h1>First Example of http using write2</h1>')

// })
// server.listen(port,()=>{
//     try{
//         console.log(`server is listening at port number ${port}`);

//     }
//     catch(e){
//         console.log(e.message);
//     }
// })



// example6
const http=require('http')
const fs=require('fs')
const port=3400;
const server=http.createServer((req,res)=>{
if(req.url=='/'){

    res.end('<h1>Home Page</h1>')
}
else if(req.url=='/about'){
    // res.setHeader('content-type','text/html')
    // console.log(req.url);
    // console.log('response',res.url);
    res.writeHead(200,{'Content-type':'text/html'})
    // res.write('<h1>About Section</h1>')
    // res.end()
    res.end('<h1>About Section</h1>')
}
else if(req.url=='/contact'){

    const myRequest = new Request('https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/ten+Flowers+/lily-flowers/lily-flowers-specifications.jpg');

fetch(myRequest).then((response) => {
  console.log(response.url);
//   response.blob().then((myBlob) => {
//     const objectURL = URL.createObjectURL(myBlob);
//     myImage.src = objectURL;
//   });
});
    res.end('<h1>Contact Section</h1>')
}
else if(req.url=='/demo'){
    const dataFile=fs.readFileSync('demo.html')
    res.end(dataFile)
}
else{
    res.statusCode=404
    res.end('<h1>Error Page</h1>')
}

})
server.listen(port,()=>{
        console.log(`server is listening at port number ${port}`);
})