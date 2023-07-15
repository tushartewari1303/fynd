// excios
const https=require('https');
const external_APi='https://jsonplaceholder.typicode.com/posts';
const callfromHttp=(callback)=>{
    https.get(external_APi,(resp)=>{
    let data='';
    resp.on('data',(chunk)=>{
        data+=chunk
    })
    resp.on('end',()=>{
        return callback(data)
    })
}).on
}