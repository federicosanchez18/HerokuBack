var nodemailer = require('nodemailer'); // email sender

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'fsanchezseidor@gmail.com',
        pass:'Seidor20'
    }
});

var mailOptions = {
    from : 'fsanchezseidor@gmail.com',
    to : 'fsanchez@seidoranalytics.com',
    subject : 'Prueba Test Email',
    text : 'Soy una prueba del back'
}
transporter.verify(function(error, success) {
    if (error) {
         console.log(error);
    } else {
         console.log('Server is ready to take our messages');
    }
 });

 transporter.sendMail(mailOptions,function(error,info){
     if(error){
         console.log(error);
     }
     else {
         console.log('Email sent:' + info.response)
     }
 })
export {transporter}