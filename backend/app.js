const express = require('express');
const connectDB = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

const app = express();


connectDB();

// Middleware
app.use(express.json());
app.use(cors()); // Ajoutez cette ligne pour permettre les requêtes CORS

// Routes
app.use('/api/emails', emailRoutes);

module.exports = app;