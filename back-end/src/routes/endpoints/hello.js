

const world = (_, res) => {
    try {
        const orgData = require('../../static/json/state.json')
        res.status(200).json(orgData)

    } catch (e) {
        res.status(404).json({"username": "blank", "appname": "blank", "password": "blank", "org": "blank", "logo": ""})
    }
}

module.exports = { world }