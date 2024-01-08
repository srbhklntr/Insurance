// routes/policies.js

const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');

// GET all policies
router.get('/policies', async (req, res) => {
  try {
    const policies = await Policy.find();
    res.json(policies);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;


