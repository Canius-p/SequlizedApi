const productController = require('../controllers/productController');
const ReviewController = require('../controllers/reviewController');

const router = require('express').Router();

router.post('/addproduct', productController.addProduct);
router.get('/allproducts', productController.getAllProducts);
router.get('/published', productController.getPublishedProducts);

router.get('/getpr', productController.getAllProductsReview);

router.get('/:id', productController.getSingleProducts);
router.put('/:id', productController.updateProducts);
router.delete('/:id', productController.deleteProducts);

module.exports = router;
