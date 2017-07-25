const mailer = require('nodemailer')
const transportConfig = require('../config/mail.config')
const mailInfos = require('../model/MailInfos')

const transporter = mailer.createTransport({
    service: transportConfig.service,
    auth: {
        user: transportConfig.user,
        pass: transportConfig.pass
    }
})

const callMailService = (req, res) => {

    const validation = checkParameters(req.body)

    if (!validation) {
        const mailToBeSent = new mailInfos(
            req.body.from,
            req.body.subject,
            req.body.message,
            req.body.name
        )

        sendMail(mailToBeSent.mailConfigFormat())
            .then(succ => res.status(200).send(succ))
            .catch(err => res.status(500).send(err))

    } else {
        res.status(400).json(validation)
    }

}

const sendMail = mailOptions => {
    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                reject(error)
            } else {
                resolve('Email sent: ' + info.response)
            }
        })
    })
}

const checkParameters = body => {
    let error = ""
    if (!body.from)
        error = "From is required"
    else if (!body.message)
        error = "Message is required"
    else if (!body.subject)
        error = "Subject is required"
    else if (!body.name)
        error = "Name is required"
    return error
}

module.exports = callMailService