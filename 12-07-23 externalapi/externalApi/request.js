const external_api='https://www.google.com'
const callfromRequest=(callback)=>{
    request(external_api,{JSON:true},(err,res,body)=>{
        if(err){
            return callback(err)
        }
        else{
            console.log(body);
            return callback(body)
        }
    })
}
module.exports.callApi-callfromRequest