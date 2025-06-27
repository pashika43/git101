const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { name, phone, dateTime, message } = req.body;
    const sql = 'INSERT INTO callback (name, phone, dateTime, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, phone, dateTime, message], (err, result) => {
   if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Callback saved successfully' });
  });
});
router.get('/', (req, res) => {
  db.query('SELECT * FROM callback', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
      res.json(results);
    });
});

 module.exports = router;
