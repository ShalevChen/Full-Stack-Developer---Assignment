// Importing required libraries
const express = require('express');     // Express framework for building web applications
const { exec } = require('child_process'); // For executing command-line commands

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000; // Set port to 3000 or use environment variable

// Middleware to parse JSON bodies
app.use(express.json()); // Enable parsing of JSON request bodies

// Route to scan a domain
app.post('/scan', async (req, res) => {
    const { domain } = req.body; // Get the domain from the request body

    if (!domain) {
        return res.status(400).json({ error: 'Domain is required.' }); // Return error if no domain is provided
    }

    try {
        // Run `nslookup` command to fetch domain info
        exec(`nslookup ${domain}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running nslookup: ${error.message}`); // Log error if command fails
                return res.status(500).json({ error: 'Failed to fetch data.' });
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return res.status(500).json({ error: 'Error occurred during lookup.' });
            }

            // Format response data
            const result = {
                domain: domain,
                lookupData: stdout
            };
            res.json(result); // Respond with the data from nslookup
        });
    } catch (error) {
        console.error('Error scanning domain:', error); // Log error if request fails
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Darkweb Scanner API running on port ${PORT}`); // Log that the server is running
});
