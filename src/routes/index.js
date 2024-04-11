const express = require('express');
const userRoutes = require('./user-routes');
const productRoutes = require('./products-routes');

const router = express.Router();

router.use('/auth', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
