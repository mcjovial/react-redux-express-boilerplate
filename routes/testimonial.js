const express = require('express');
const { getTestimonial } = require('../controllers/testimonial');
const router = express.Router();


router.get('/', getTestimonial);

module.exports = router;