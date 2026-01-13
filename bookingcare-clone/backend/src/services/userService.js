const db = require('../models/index')
const createAnAccount = async(data) =>{
    await db.User.create(data)
}

module.exports = {
    createAnAccount
}