const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


function sms(msg){
  
client.messages.create({
     body: msg,
     from: '+18706578060',
     to: '+15126952339'
   })
  .then(message => console.log(message.status))
  .done();
}

module.exports = {
  sms
}