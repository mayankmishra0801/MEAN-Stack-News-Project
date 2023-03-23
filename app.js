console.log("Hello Node js");
const express = require("express");
const bodyParser = require('body-parser')
const newsRoutes=require('./routes/newsRoute')
const app =  express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = process.env.port || 8080
const authRoute = require('./routes/auth-route')
const mongoose = require('mongoose');
const cors = require('cors')

mongoose.connect('mongodb://localhost:27017/shopapp')
   

.then(()=>{
        console.log("Database is Connected!");
    })
    .catch(()=>{
        console.log("DB is not connected");
    });

    app.use(bodyParser.urlencoded({extended:false}))
     
    app.use(bodyParser.json())

    app.use(cors())

app.use('/auth',authRoute);


app.get('/',(req,res) => {
    res.send("Welcome To Testy Codeiz server")
})



app.listen(port,()=>{
  console.log("Node server is connected",port)
})
app.use('/api',newsRoutes)











