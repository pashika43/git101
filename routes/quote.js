const express = require('express');
const router = express.Router();
const db = require('../db');
router.post('/', (req, res) => {
  const { name, email, website, message } = req.body;
  const sql = 'INSERT INTO quote (name, email, website, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, website, message], (err, result) => {
  if (err) return res.status(500).json({ error: err.message });
  res.json({ message: 'Quote saved successfully' });
  });
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM quote', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
module.exports = router;
