const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;
var cors = require('cors');

app.use(cors({credentials:true, origin:true}));




app.get('/', function(req, res){
    res.json({slackUsername: 'topingstar', backend: true, age : 24, bio: 'I am Topister, 24 years old. Currently a computer science student at African Leadership University. I am more focused in Backend development.I am very much interested in learning new technology and using them.'})

})

app.listen(PORT, () =>{
    console.log(`Listening on port ${PORT}`)
})