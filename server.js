const express = require('express');
const port = 3000;

// Create the server app

const site = express();

site.use(express.static('public'));

site.listen(port, function() {
    console.log('Server is running on Port 3000');
});
