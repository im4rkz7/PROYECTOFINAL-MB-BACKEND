import dotenv from 'dotenv'
import { createTransport } from 'nodemailer';
import twilio from 'twilio'

dotenv.config()

const TEST_MAIL = "cmzruiz@gmail.com"
const trasporter = createTransport ({
    service: "gmail",
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: process.env.PASS
    }
})
const accountSid = process.env.TWILIOID; 
const authToken = process.env.TWILIOTOKEN; 
const client = twilio(accountSid, authToken);

async function sendMail(mailOptions) {
    try{
        const inf = await trasporter.sendMail(mailOptions);
       
    }
    catch(error){
        console.log(error)
    }
}

async function sendWhats(whatsOption) {
    try{
        const MessageWhats = await client.messages .create(whatsOption)
      
    }
    catch(error){
        console.log(error)
    }
}

export default {
    sendMail,
    sendWhats
}

