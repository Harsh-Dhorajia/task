const express = require('express');
const { createProductController, ProductListController, updateProductController, deleteProductController } = require('../controllers/Products');
const authMiddleware = require('../middlewares/authenticate');
const validation = require('../middlewares/validation');
const productValidation = require('../utils/validations/productValidation');

const router = express.Router();

router.route('/create').post(authMiddleware, validation(productValidation.create), createProductController);
router.route('/list').get(authMiddleware, ProductListController);
router.route('/update/:ProductId').patch(authMiddleware, validation(productValidation.update), updateProductController);
router.route('/delete/:ProductId').delete(authMiddleware, deleteProductController);

module.exports = router;
