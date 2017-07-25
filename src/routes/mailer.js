const mailer = require('../services/mailer')

module.exports = app => {

    app.post('/mail', mailer)
    app.get('/', (req, res) => {
        res.status(404).json({
            error: 'Get is not allowed. Try to access the following routes',
            routes: {
                "/mail": {
                    method: "POST",
                    params: {
                        "from": "string",
                        "subject": "string",
                        "text": "string"
                    }
                }
            }
        })
    })
}