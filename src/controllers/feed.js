
const { Users, User } = require("../model/Users");

var users = new Users()
module.exports = app =>{
    app.post('/feed', (req,res) => res.json({
        message: users.getAll()
    }))
}