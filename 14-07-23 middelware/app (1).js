// const express=require('express');
// const app=express();
// const port=5100;


// const reqFilter=(req,res,next)=>{
//     if(!req.query.age){
//         res.send('<h1>Please enter your age</h1>')
//     }

//     else if(req.query.age<18){
//         res.send('<h1>You cannot access this page</h1>')
//     }

//     else{
//         next()
//     }
// }


// app.get('/',(req,res)=>{
//     res.send('Hello world')
// })
// app.use(reqFilter)
// app.get('/about',(req,res)=>{
//     res.send('<h1>About section</h1>')
// })

// app.get('/contact',(req,res)=>{
//     res.send('<h1>Contact section</h1>')
// })


// app.listen(port,()=>{
//     console.log(`server is listening at port ${port}`);
// })


// example-2
// const express=require('express')
// const app=express();
// const port=5100;
// const reqFilter=require('./middleware')
// const route=express.Router();
// route.use(reqFilter)
// route.get('/user',(req,res)=>{
//     res.send('user')
// })
//  app.get('/',(req,res)=>{
//         res.send('Hello world')
//     })
//     app.use(reqFilter)
//     app.get('/about',(req,res)=>{
//         res.send('<h1>About section</h1>')
//     })
    
//     app.get('/contact',(req,res)=>{
//         res.send('<h1>Contact section</h1>')
//     })
    
    
//     app.listen(port,()=>{
//         console.log(`server is listening at port ${port}`);
//     })
    


// exaple-3
const express=require('express')
const app=express();
const port=5100;
const reqFilter=require('./middleware')
const route=express.Router();
route.use(reqFilter)
app.use('/',route)
 app.get('/',(req,res)=>{
        res.send('Hello world')
    })
   
    app.get('/about',reqFilter,(req,res)=>{
        res.send('<h1>About section</h1>')
    })
    
    app.get('/contact',(req,res)=>{
        res.send('<h1>Contact section</h1>')
    })

    route.get('/user',(req,res)=>{
    res.send('user')
})

    
    
    app.listen(port,()=>{
        console.log(`server is listening at port ${port}`);
    })
    