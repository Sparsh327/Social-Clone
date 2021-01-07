const express = require('express')
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000

// set Template engine

app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')

require('./routes/web')(app)


app.listen(PORT,()=>{
    console.log(`Listning on port ${PORT}`);
})
