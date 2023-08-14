const ReviewController = require('../controllers/reviewController');
const express = require('express');

const router = express.Router();

router.post('/addreview', ReviewController.addReview);
router.get('/getreview', ReviewController.getAllReviews);

module.exports = router;
