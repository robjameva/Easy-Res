// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Thank you for using Easy Res! Your table is confirmed at RESTAURANT for NUM people at TIME',
        from: '+17853776055',
        to: '+19739195256'
    })
    .then(message => console.log(message.sid));
