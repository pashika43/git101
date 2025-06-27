const express = require('express');
const router = express.Router();
  const db = require('../db');
router.post('/', (req, res) => {
  const { page, title, description, keywords, status } = req.body;
  const sql = 'INSERT INTO meta (page, title, description, keywords, status) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [page, title, description, keywords, status], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Meta info added successfully' });
  });
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM meta', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
module.exports = router;
