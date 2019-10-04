const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')
const logger = require('morgan')

require('./config/database');
require('dotenv').config()

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico'))) // to serve favicon icon
app.use(express.static(path.join(__dirname, 'build'))) // to serve static files

const port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log(`we are connected on port: ${port}`)
})