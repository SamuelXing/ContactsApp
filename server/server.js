const express = require('express');
const path = require('path');
const app = express();

// settings
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// start server
app.listen(port, () => {
    console.log('Server is listening on http://localhost:3000......');
});