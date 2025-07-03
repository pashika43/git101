const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE
router.post('/', (req, res) => {
  const { name, type, title, excerpt, description, meta_description, status } = req.body;
  const sql = `
    INSERT INTO casestudies (name, type, title, excerpt, description, meta_description, status)
    VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, type, title, excerpt, description, meta_description, status], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Case study added', id: result.insertId });
  });
});

// GET ALL
router.get('/', (req, res) => {
  db.query('SELECT * FROM casestudies WHERE is_deleted = FALSE', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

module.exports = router;
