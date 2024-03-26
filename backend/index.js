import express from 'express';

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

const port = process.env.PORT || 3000
app.get('/api/jokes',(req,res)=>{
   let jokes = [
    {
       id:1,
       title:"One joke",
       content:"This is First joke"
       
    },
    {
       id:1,
       title:"One joke",
       content:"This is second joke"
    },
    {
       id:1,
       title:"One joke",
       content:"This is Third joke"
    },
    {
       id:1,
       title:"One joke",
       content:"This is Four joke"
    },
    {
       id:1,
       title:"One joke",
       content:"This is Fifth joke"
    },
   ]
   res.send(jokes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})