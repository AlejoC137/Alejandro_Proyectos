const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes/apiRoutes.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express(); 
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Serve API routes
app.use('/api', apiRoutes); // Moved to /api to avoid conflicts with frontend paths

// Serve static files from the frontend/client build folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Catch-all route to serve the frontend index.html for any non-API request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

module.exports = app;