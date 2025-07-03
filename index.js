require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

// Middleware
app.use(cors());
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Backend is live and working!');
});

// API routes
app.use('/api/contact', require('./routes/contact'));
app.use('/api/callback', require('./routes/callback'));
app.use('/api/quote', require('./routes/quote'));
app.use('/api/consult', require('./routes/consult'));
app.use('/api/users', require('./routes/users'));
app.use('/api/meta', require('./routes/meta'));

// ✅ New Routes
app.use('/api/blog', require('./routes/blog'));
app.use('/api/casestudy', require('./routes/casestudy'));

// Start server
app.listen(5000, () => {
  console.log('Server started on port 5000');
});

