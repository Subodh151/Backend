require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/subodh',(req,res)=>{
  res.send("How are youuuu??")
})

app.get('/subodh/login',(req,res)=>{
  res.send("How are youuuu doing??")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})