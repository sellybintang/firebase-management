const express= require('express')
const cors = require ('cors');
// const User = require('./firebaseSKD/db')
const body_parser = require ('body-parser') 
const logger = require ('morgan');

const app = express()
const Port = 3010
const router = require('./routes/index')

app.use(logger('dev'))
app.use (body_parser.json())
app.use(express.json())
app.use(cors());


app.use(router)
app.listen (Port, ()=>
    console.log(`Express listening on port ${Port}`))


