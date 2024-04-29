const express = require('express');
const morgan = require('morgan');
const getProjectRouter = require('./routes/getProjectRoutes.js');
const postProjectRouter = require('./routes/postProjectRoutes.js');
const { run } =  require('./dataBase/dataBase.js')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express(); 
app.use(bodyParser.json());
app.use(cors())
app.use(run); // <- brings conects the client to mongodb 
app.use(morgan('dev')); //<- says hi! 
app.use(
    getProjectRouter,
    postProjectRouter
    ) //<- sets the routers before use 

// app.use('/', (req,res) => {
//     res.send('buenas');
// })

module.exports = app; // is required by index.js