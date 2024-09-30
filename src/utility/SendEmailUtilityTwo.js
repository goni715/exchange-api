const nodemailer = require('nodemailer');

const SendEmailUtilityTwo= async (EmailTo, EmailText, EmailSubject, ResetURL) => {

        //transporter
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for port 465, false for other ports
            auth: {
                user: process.env.SMTP_USERNAME,
                pass: process.env.SMTP_PASSWORD
            }
        })



        let mailOptions = {
            from: `Manually Money Exchange ${process.env.SMTP_FROM}`,
            to: EmailTo,
            subject: EmailSubject,
           // text: EmailText,
            html: ResetURL, // html body
        };

        return await transporter.sendMail(mailOptions)
}
module.exports=SendEmailUtilityTwo
