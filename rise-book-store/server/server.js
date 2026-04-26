
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/rise_books')
    .then(() => console.log('>>> [SYSTEM] DATABASE CONNECTED'))
    .catch(err => console.log('>>> [ERROR] DB CONNECTION FAILED:', err));

// Basic Route
app.get('/', (req, res) => {
    res.json({ status: 'active', system: 'Rise Book Store OS', version: '1.0.0' });
});

app.listen(PORT, () => console.log(`>>> [SYSTEM] SERVER RUNNING ON PORT ${PORT}`));
