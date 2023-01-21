//Requiring express

const express = require('express');
const app = express();

//Requiring path it will be used for __dirname to specify paths
const path = require('path');

//addded database connection file conn.js
require("./src/db/conn");

//added database schema
const Register = require("./src/models/register");

//this is to catch form name by req.body works as bodyParser
const { urlencoded } = require('express');
const { json } = require('express');
//port number 
const port = process.env.PORT || 3000

//using req.body
app.use(express.json());
app.use(express.urlencoded({extended : false}))

//getting path of html file
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path));

//getting our html file
app.get("/",(req,res) =>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

//adding css file to our html file
app.use('/css', express.static(__dirname + '/public/css'))

//posting our data to our database
app.post("/",async (req,res) => {
    try {
        const data = new Register ({
            email: req.body.email,
            password : req.body.password

        })
        await data.save();
        res.status(201).send("Data added to database");
    } catch (error) {
        console.log(error);
    }
})


//listening our port
app.listen(port,() => {
    console.log(`Server is running on ${port}`);
})
