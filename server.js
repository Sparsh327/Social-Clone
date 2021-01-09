const express = require('express')
const app = express();
const expressLayout = require('express-ejs-layouts')
const path = require('path');
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({
    extended: false
  }));
app.use(express.static("public"))

// set Template engine
app.use(expressLayout)
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

//connect mongodb
mongoose.connect("mongodb://localhost:27017/SocialClone",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex:true
});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Database connected...");
}).catch(err=>{
    console.log("connection Failed...");
});




require('./routes/web')(app)


app.listen(PORT,()=>{
    console.log(`Listning on port ${PORT}`);
})
