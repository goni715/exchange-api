const nodemailer = require('nodemailer');

const ConfirmSendEmailUtility= async (req, res) => {

    try{
        const email = req.body['email'];

        //transporter
        let transporter = await nodemailer.createTransport({
            host: "mail.teamrabbil.com",
            port: 587,
            secure: false,
            auth: {
                user: "info@teamrabbil.com",
                pass: '~sR4[bhaC[Qs'
            },
            tls: {
                rejectUnauthorized: false
            }
        })

	
	
       let mailOptions = {
           from:`Exchange App <info@teamrabbil.com>`,
           to: email,
           subject: "Exchange Confirmation Email",
           html: `
           <b>We have completed your payment.</b>
            `
       };


	    const result = await transporter.sendMail(mailOptions);
        res.status(200).json({message:"success", data:result});
	}
	catch(e){
        res.status(500).json({message:"error", data:e.toString()});
	}

}
module.exports=ConfirmSendEmailUtility
