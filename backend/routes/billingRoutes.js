const express = require('express');
const router = express.Router();
const billingController = require('../controllers/billingController');

// Create a new invoice
router.post('/', billingController.createInvoice);

// Get all invoices
router.get('/', billingController.getInvoices);

module.exports = router;