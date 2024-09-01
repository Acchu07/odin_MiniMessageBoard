const express = require('express')
const indexRouter = require('./routes/indexRouter')
const newRouter = require('./routes/newRouter')
const openRouter = require('./routes/openRouter')
const path = require('path');
const app = express()
const port = process.env.PORT || 3000
const assetsPath = path.join(__dirname, "public");

app.set('view engine', 'ejs')
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use('/',indexRouter);
app.use('/new', newRouter)
app.use('/open', openRouter)