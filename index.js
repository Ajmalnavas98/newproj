const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 8000
var path = require('path')
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
    extended: true,
    })
    )
app.get('/',(request,response) => {
 response.sendFile(path.join( __dirname,'webpage.html' )); // )); // for what purpose
//response.sendfile( --dirname+"/public/"+"webpage.html") ;
 })

 app.get('/id',db.getId)
 app.get('/quest_text',db.getQuesttext)
 app.listen(port,() => {
 console.log(`App running on port ${port}.`)
 })
//path.join( __dirname,'webpage.html' )
