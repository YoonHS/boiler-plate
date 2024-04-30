const express = require('express')
const app = express()
const port = 5200
const bodyParser = require('body-parser')
const {User} = require('./models/User');

const config = require('./config/key')

app.use(express.json())

// application/x-www-form-urlencoded parsing
app.use(bodyParser.urlencoded({extended: true}));

// application/json parsing
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(
  config.mongoURI // ,{userNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, userFildAndModify: false}
).then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!  한글 goo')
})

app.post('/register', (req, res) => {
  // user info send

  const user = new User(req.body)
  user
    .save()
    .then(()=>{
      res.status(200).json({
        success: true  
      })
    })
    .catch((err)=>{
      console.error(err);
      res.json({
        success:false,
        err:err
      })
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})