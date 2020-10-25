const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/convert', function(req , res ){
    console.log(req.read)
})

app.listen(8080 , () =>{
    console.log('App is running...')
})

