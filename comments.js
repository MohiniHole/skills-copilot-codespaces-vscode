// Create web server
// Import express library
const express = require('express');

// Create an instance of express
const app = express();

// Define a port to listen on
const port = 3000;

// Create a route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World! This is your web server!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


