const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('<a href="https://synergysphere.vercel.app/"></a>');
});

app.use('/auth', authRoutes);

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));

