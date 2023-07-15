const http=require('http')

const callfromRequest=rquire('./request.js')
httpify.createServer((req,res)=>{
    if(req.url==='/request'){
        callfromRequest.callApi(function(response){
            res.write(JSON.stringify(response))
            res.end()
        })
    }
    else if(req.url==='/node'){
        callfromHttp.callApi(function(res){
            callfromHttp.callAPi(function(response){
                res.write(response);
                res.enc()
            })

        })
    }
    })
    .listen(4500,()=>{
    console.log('Server is listeein')
})