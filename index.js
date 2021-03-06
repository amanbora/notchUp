// Import the express lirbary
const express = require('express')
const https = require('https')


const app = express()
app.use( express.static(__dirname + '/public'))

app.get('*', (req, res)=>{
  res.render('index')
})
// Start the server on port 8080
app.listen(process.env.PORT || 8080, ()=>{
  console.log("Listening at port 8080");
})
