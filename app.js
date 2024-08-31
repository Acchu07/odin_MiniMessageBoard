const express = require('express')
const indexRouter = require('./routes/indexRouter')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/',indexRouter)
app.get('/new',indexRouter)

function sendStuff(req,res){
  console.log('Accessing Index Page')
  res.end();
}