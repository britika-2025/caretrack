const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');

// Add a new staff member
router.post('/', staffController.addStaff);

// Get all staff members
router.get('/', staffController.getStaff);

module.exports = router;