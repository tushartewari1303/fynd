const express=require('express')
const app=express()
const path=require('path');
const port=6700;
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.get('about',(req,res)=>{
    res.send('Hello world about' );
})
app.get('/jasondata',(req,res)=>{
    res.json({'peetr':'name'} );
})
app.get('/demo',(req,res)=>{
    res.sendFile(path.join(__dirname,'demo.html'))
})
app.listen(port,()=>{
    console.log(`server is listeniong at port number ${port}`);
})