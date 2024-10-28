// Importing required libraries
const express = require('express'); // Express framework for building web applications
const axios = require('axios');     // Axios for making HTTP requests

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; // Set port to 3000 or use environment variable

// Middleware to parse JSON bodies
app.use(express.json()); // Enable parsing of JSON request bodies

// Replace with your IntelX API key
const API_KEY = 'YOUR_INTELX_API_KEY'; // Insert your IntelX API key here

// Route to scan a domain
app.post('/scan', async (req, res) => {
    const { domain } = req.body; // Get the domain from the request body

    if (!domain) {
        return res.status(400).json({ error: 'Domain is required.' }); // Return error if no domain is provided
    }

    try {
        // Sending request to IntelX API
        const response = await axios.get(`https://intelx.io/api/darkweb/search`, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY, // Attach API key in the request header
            },
            params: {
                query: domain, // Query parameter with the domain to search
            },
        });

        // Return structured data
        res.json(response.data); // Respond with the data received from IntelX
    } catch (error) {
        console.error('Error fetching data from IntelX:', error); // Log error if request fails
        res.status(500).json({ error: 'Failed to fetch data from IntelX.' }); // Return error response
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Darkweb Scanner API running on port ${PORT}`); // Log that the server is running
});
