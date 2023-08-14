const db = require('../models');

const Review = db.reviews;

// add review
const addReview = async (req, res) => {
  try {
    let data = {
      rating: req.body.rating,
      description: req.body.description,
    };
    const review = await Review.create(data);
    res.status(200).send(review);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

// get all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll({});
    res.status(200).send(reviews);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = {
  addReview,
  getAllReviews,
};
