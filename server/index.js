const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin: 'https://synergysphere.vercel.app', // Allow requests only from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Allowed HTTP methods
    credentials: true,                          // Allow cookies or authentication headers
}));

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes);

app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
