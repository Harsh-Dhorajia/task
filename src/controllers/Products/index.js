const createProductController = require('./create');
const ProductListController = require('./list');
const updateProductController = require('./update');
const deleteProductController = require('./delete');

module.exports = {
  createProductController,
  ProductListController,
  updateProductController,
  deleteProductController,
}
