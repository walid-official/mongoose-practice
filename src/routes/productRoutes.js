const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts
} = require('../controllers/productController');

// Search route
router.route('/search')
  .get(searchProducts);

// Standard CRUD routes
router.route('/')
  .get(getAllProducts)
  .post(createProduct);

router.route('/:id')
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;