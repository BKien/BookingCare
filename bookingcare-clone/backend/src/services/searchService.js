
const db = require('../models/index')
const search = async(keyWord)=>{
    try {
        const data = await db.User.findAll(
            {where: {fullName:keyWord}}
        )
        return {data}
    } catch (error) {
        throw error
    }
}

module.exports = {search}