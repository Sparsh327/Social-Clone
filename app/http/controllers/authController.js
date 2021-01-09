const User = require('./../../models/users')
function authController(){

    return {
        login(req,res){
            res.render("auth/login")
        },
       
        register(req,res){
            res.render("auth/register")
    },postRegister(req,res){
        const {name,email,password} = req.body
        const user = new User({
            name,
            email,
            password
        })
        user.save().then((user) => {
            // Login
            return res.redirect('/')
         })
    }
  
}
}
module.exports = authController