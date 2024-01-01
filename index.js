console.log("backend test");

require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "name":"harish",
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest/users/users#get-a-user"
}

app.get('/githubData',(req,res)=>{
    res.json(githubData);
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/test-only', (req,res)=>{
    res.send('testing completed')
})

app.get('/test-2',(req, res)=>{
    res.send('test 2 successful.')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})