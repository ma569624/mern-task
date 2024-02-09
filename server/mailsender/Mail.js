const nodemailer = require('nodemailer');

const mailsender = async (email) => {
    // Create a transporter object using SMTP transport
    console.log("email for sending", email);
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        // port: 587,
        auth: {
            // its app a dummy logins 

            user: 'livacit677@fahih.com', // Your email address
            pass: 'password' // Your email password
        }
    });

    // Define email options
    let mailOptions = {
        from: 'livacit677@fahih.com', // Sender email address
        to: email, // Recipient email address
        subject: 'Test Email', // Subject line
        text: 'User not login send mail and not purchase.' // Plain text body
    };

    // Send email
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
            // console.log('Preview', nodemailer.getTestMessageUrl(info));
        }
    });
}

module.exports = mailsender;