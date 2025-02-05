const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json(['fullstack', 'machinlearn', 'cybersecurity', 'mobile'])
});

module.exports = router;