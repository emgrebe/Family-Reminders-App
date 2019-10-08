const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const cookieParser = require('cookie-parser');
const cors = require('cors');
const logger = require('morgan')

require('dotenv').config()
require('./config/database');

const app = express()


app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // to serve favicon icon
app.use(express.static(path.join(__dirname, 'build'))) // to serve static files

app.use('/api/users', require('./routes/users'))
app.use('/api/twilio', require('./routes/twilio'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`We are connected on port: ${port}`)
})