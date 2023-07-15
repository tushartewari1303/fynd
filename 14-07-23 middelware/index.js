const express=require('express')
const app=express();
const port=3400;
const path=require('path')
const pathdata=path.join(__dirname,'public');
console.log(pathdata);
app.use(express.static(pathdata))
app.use('/demodata',express.static(path.join(__dirname,'public/navbar.html')))
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/contact',(req,res)=>{
    res.send('Contact Page')
})

app.get('/about',(req,res)=>{
    res.send('About Page')
})
app.get('/demo',(req,res)=>{
    res.sendFile(path.join(__dirname,'demo.html'))
})

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})