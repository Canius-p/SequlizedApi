const productController = require('../controllers/productController');
const router = require('express').Router();

router.post('/addProduct', productController.addProduct);
router.get('/allproducts', productController.getAllProducts);
router.get('/published', productController.getPublishedProducts);

router.get('/:id:', productController.getSingleProducts);
router.get('/:id:', productController.updateProducts);
router.get('/:id:', productController.deleteProducts);

module.exports = router;
