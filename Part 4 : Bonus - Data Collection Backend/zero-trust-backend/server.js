const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs-extra'); // For handling file operations
const path = require('path'); // To handle file paths
const app = express();
const PORT = 3000;

// Middleware to parse JSON data from incoming requests
app.use(bodyParser.json());

// Path to save the JSON file
const dataFilePath = path.join(__dirname, 'data', 'zero-trust-data.json');

// Ensure the data directory exists
const ensureDataDirectoryExists = async () => {
    const dataDir = path.join(__dirname, 'data');
    try {
        await fs.ensureDir(dataDir);
    } catch (error) {
        console.error('Error creating data directory:', error);
    }
};

// Endpoint to submit Zero-Trust Score data
app.post('/submit-data', async (req, res) => {
    try {
        const data = req.body; // Get data from request body

        // Save data to the JSON file
        await fs.writeJson(dataFilePath, data);
        res.status(200).send('Data has been saved successfully!');
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send('Error saving data'); // Handle errors
    }
});

// Endpoint to retrieve saved Zero-Trust Score data
app.get('/retrieve-data', async (req, res) => {
    try {
        // Read data from the JSON file
        const data = await fs.readJson(dataFilePath);
        res.status(200).json(data); // Send the data back in JSON format
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send('Error retrieving data'); // Handle errors
    }
});

// Start the server and ensure the data directory exists
app.listen(PORT, async () => {
    await ensureDataDirectoryExists();
    console.log(`Server is running at http://localhost:${PORT}`);
});
