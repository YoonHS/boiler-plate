const express = require('express')
const app = express()
const port = 5200

const mongoose = require('mongoose')
mongoose.connect(
  'mongodb+srv://yoonhs306:comatose86@boilerplate.k6wqcef.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate'
  // ,{userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, userFildAndModify: false}
).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))




app.get('/', (req, res) => {
  res.send('Hello World!  한글 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})