const mailer = require('../services/mailer')

module.exports = app =>{
    app.post('/mail', mailer)
}