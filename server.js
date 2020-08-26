const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const { resolve } = require('path');
const routes = require('./routes');

const app = express();

// Connect Database
connectDB();

// Init cors setup middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.use(cors());

// Init JSON Middleware
app.use(express.json({ extended: false }));

// Init static files middleware
app.use('/files', express.static(resolve(__dirname, 'uploads')));

// Init routes middleware
app.use(routes);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // Send static file 
  app.get('*', (request, response) => response.sendFile(resolve(
    __dirname,
    'client',
    'build',
    'index.html'
  )));
};

// Init express server
const PORT = process.env.PORT || 8888;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));
