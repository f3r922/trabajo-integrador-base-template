var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongodb = require('./databases/mongodb.connection.js')
let multer = require('multer')
let cors = require("cors");


const placeRouter = require('./src/routes/places.router.js')

var app = express();

mongodb.connectMongoDB()
  .then(()=> console.log('Mongodb Connected'))
  .catch(err => console.log(err))
  

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// middlewares
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'src/public/img/uploads'),
  filename: (req, file, cb)=>{
      cb(null, file.originalname)
  }
})
const upload = multer({
  storage: storage,
}).single('image')

//Static files
app.use(express.static(path.join(__dirname, 'src/public')))

app.use(upload)

app.use('/places', placeRouter);


module.exports = app;
