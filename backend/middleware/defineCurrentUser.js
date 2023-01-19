const db = require("../models")
const jwt = require('json-web-token')

const { User } = db;

async function defineCurrentUser(req, res, next){
    try {
        const [ method, token ] = req.headers.authorization.split(' ')
        if(method == 'Bearer'){
            const result = await jwt.decode('NPiSf1lX912i', token)
            const { id } = result.value
            let user = await User.findOne({ 
                where: {
                    id: id
                }
            })
            req.currentUser = user
        }
        next()
    } catch(err){
        req.currentUser = null
        next() 
    }
}

module.exports = defineCurrentUser