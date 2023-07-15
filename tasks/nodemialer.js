var nodemailer=require('nodemailer')
var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'tushartewari1303@gmail.com',
    pass:'gfyyqplhbgyobeep'}
    

});

var maildata={
    from:'tushartewari1303@gmail.com',
    to:'tushartewari8343@gmail.com',
    subject:'Sending sample mail',
    text:'hello tushar tewai from 1303',
    attachments:[{
        filename:'bg1.png',
path:"D:\\Projects\\Portfolio\\bg1.png"
}]

};
transport.sendMail(maildata,function(err,data){
    if(err){console.log(err);}
    else{
        
        console.log('mail send');
    }
})