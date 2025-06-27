const express = require('express');
const router = express.Router();
const db = require('../db');
router.post('/', (req, res) => {
  const { name, email, phone, password, hash, profile, level, status } = req.body;
  const sql = 'INSERT INTO users (name, email, phone, password, hash, profile, level, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [name, email, phone, password, hash, profile, level, status], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'User created successfully' });
  });
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
if (err) return res.status(500).json({ error: err.message });
  res.json(results);
  });
});
   module.exports = router;
