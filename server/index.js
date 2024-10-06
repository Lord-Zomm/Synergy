const express = require('express');
const cors = require('cors');
const https = require('https');
const fs = require('fs');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// Use CORS and JSON parsing middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Removed Twilio-related message handling
app.post('/', (req, res) => {
    const { type } = req.body;

    if (type === 'message.new') {
        return res.status(200).send('Message handling logic removed.');
    }

    return res.status(200).send('Not a new message request');
});

// Set up authentication routes
app.use('/auth', authRoutes);

// Load SSL certificate and key
const privateKey = fs.readFileSync('/home/ec2-user/Synergy/server.key', 'utf8');
const certificate = fs.readFileSync('/home/ec2-user/Synergy/server.cert', 'utf8');
const credentials = { key: privateKey, cert: certificate };

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

// Start the HTTPS server
httpsServer.listen(PORT, () => {
    console.log(`HTTPS Server running on port ${PORT}`);
});
