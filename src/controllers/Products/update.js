const ProductModel = require('../../models/Product.model');

const updateProduct = async (req, res, next) => {
  try {
    const { body, params, user } = req;

    if (!params.ProductId) {
      return res.status(400).send({ message: 'Invalid Input' });
    }

    const Product = await ProductModel.findById(params.ProductId)

    if (!Product) {
      return res.status(404).send({
        message: 'Product Not Found',
      });
    }

    const updatedProduct = await ProductModel.findByIdAndUpdate(Product.id, {
      $set: {
        ...body
      }
    });
    return res.status(200).send(updatedProduct);
  } catch (error) {
    console.log('Error while ProductUpdate', error);
    return res.status(500).send(error);
  }
}

module.exports = updateProduct;
