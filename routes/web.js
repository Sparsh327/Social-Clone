
const homeController = require("../app/http/controllers/homeController")
const authController = require("../app/http/controllers/authController")
function initRoutes(app){


       app.get('/login',authController().login )
       
       app.get('/register',authController().register)
       app.post('/register',authController().postRegister)
       

       app.get('/',homeController().index)

}

module.exports = initRoutes