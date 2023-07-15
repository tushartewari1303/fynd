const http=require('http')
const fs=require('fs')
// const port=3300;
const server=http.createServer();

server.on('request',(req,res)=>{
//     fs.readFile('Data8277.csv',(err,data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString())
//     })


const rstream=fs.createReadStream('Data8277.csv');
// rstream.on('data',(chunkdata1)=>{
//     res.write(chunkdata1.toString())
// })

// rstream.on('end',()=>{
//     res.end()
// })
// rstream.on('error',(e)=>{
//     console.log('file not found');
// })


rstream.pipe(res)
})
server.listen(5000)