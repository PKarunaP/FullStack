const { createTransport } = require("nodemailer")

module.exports = {
    transporter: createTransport(
        {
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'example@gmail.com',
                pass: 'password'
            }
        }
    )
}