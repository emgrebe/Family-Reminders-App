const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'hello',
     from: '+18706578060',
     to: '+15126952339'
   })
  .then(message => console.log(message.sid));