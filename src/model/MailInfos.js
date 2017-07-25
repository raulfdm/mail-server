const mailConfig = require('../config/mail.config')

class MailInfos {
    constructor(from,subject,text) {
        this._from = from
        this._to = mailConfig.user,
        this._subject = `${subject}`,
        this._text = `Email From: ${from}\nMessage: ${text}`
    }

    get from(){
        return this._from
    }
    get to(){
        return this._to
    }
    get subject(){
        return this._subject
    }
    get text(){
        return this._from
    }

    mailConfigFormat(){
        return {
            from: this._from,
            to: this._to,
            subject: this._subject,
            text: this._text
        }
    }
}

module.exports = MailInfos