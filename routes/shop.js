const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
router.get('/', shopController.getIndex); // ana sayfa geldiğince get productsı çağırıyoruz.
router.get('/products', shopController.getProducts);
router.get('/products/:productid', shopController.getProduct);
router.get('/categories/:categoryid', shopController.getProductsByCategoryId);
router.get('/products/delete', shopController.getProduct);
router.get('/details', shopController.getProductsDetails);
router.get('/cart', shopController.getCart);
router.get('/orders', shopController.getOrders);
module.exports = router;