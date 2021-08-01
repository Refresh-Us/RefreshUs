const nodemailer = require("nodemailer")
const mailGun = require("nodemailer-mailgun-transport")

const auth = {
    auth: {
        api_key: "a954261e5c3e7395110974d7d3591665-c4d287b4-d0589e15",
        domain: "sandbox55c4f0e1739f41faa32e1d07e80c0011.mailgun.org",
    },
}

const transporter = nodemailer.createTransport(mailGun(auth))

const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,
        to: "refreshus96@gmail.com",
        subject,
        text,
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            cb(err, null)
        } else {
            cb(null, data)
        }
    })
}

module.exports = sendMail
