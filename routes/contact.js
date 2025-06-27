const express = require('express');
const router = express.Router();
const db = require('../db');
router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;

  const sql = `INSERT INTO contact (name, email, phone, message, created) VALUES (?, ?, ?, ?, NOW())`;
  db.query(sql, [name, email, phone, message], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Contact saved successfully', id: result.insertId });
  });
});

  module.exports = router;


