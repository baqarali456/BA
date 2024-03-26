require('dotenv').config()
const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
    res.send('Baqar Login')
})

app.get('/twitter',(req,res)=>{
    res.send('<h1>Baqar In Twitter</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Youtube Open</h2>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});