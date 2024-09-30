const nodemailer = require('nodemailer');
const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

        //transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: process.env.NODE_ENV === "production", // true for port 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        })


        let mailOptions = {
            from: `Money Exchange ${process.env.SMTP_FROM}`,
            to: EmailTo,
            subject: EmailSubject,
            text: EmailText
        };

        return await transporter.sendMail(mailOptions);

}
module.exports=SendEmailUtility
