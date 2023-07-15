const request=require('request')
// const external_api='https://jsonplaceholder.typicode.com/posts';

// const external_api='https://www.google.com';
const external_api='https://www.linkedin.com';

const callfromRequest=(callback)=>{
    request(external_api,{json:true},(err,res,body)=>{
    if(err){
        return callback(err)
    }
    else{
        console.log(body);
        return callback(body)
    }
    })       
}
// let callApi=callfromRequest
module.exports.callApi=callfromRequest