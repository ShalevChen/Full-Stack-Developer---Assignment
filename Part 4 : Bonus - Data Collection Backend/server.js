const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// Data storage (in-memory for simplicity, can be replaced with a database)
let zeroTrustData = [];

// Endpoint to submit Zero-Trust Score data
app.post('/submit', (req, res) => {
    const scoreData = req.body;
    
    // Validate input
    if (!scoreData || typeof scoreData !== 'object') {
        return res.status(400).send('Invalid data format');
    }
    
    zeroTrustData.push(scoreData); // Store the data
    res.status(201).send('Data submitted successfully');
});

// Endpoint to retrieve stored Zero-Trust Score data
app.get('/data', (req, res) => {
    res.status(200).json(zeroTrustData); // Send back the stored data
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
