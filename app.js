// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from GitHub Actions 2!');
});

module.exports = app;
