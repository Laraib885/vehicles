const express = require('express');
const dbconnection = require('./db'); // Import the database connection function
const app = express();
const port = process.env.PORT || 5000;

// Connect to the database

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log(`Node.js server started on PORT ${port}`);
});
