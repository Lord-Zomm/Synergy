const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 80;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Removed Twilio-related message handling
app.post('/', (req, res) => {
    const { type } = req.body;

    if (type === 'message.new') {
        // Since Twilio logic has been removed, you can either respond here or implement any other logic you need
        return res.status(200).send('Message handling logic removed.');
    }

    return res.status(200).send('Not a new message request');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
