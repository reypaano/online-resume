const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello po")
})
app.listen(3001, ()=>{
    console.log("TEST")
})