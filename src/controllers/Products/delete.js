const ProductModel = require('../../models/Product.model');

const deleteProduct = async (req, res, next) => {
  try {
    const { params, user } = req;

    if (user.role !== 'ADMIN') {
      return res.status(401).send({message: "You are not allowed to delete the product"});
    }

    if (!params.ProductId) {
      return res.status(400).send({ message: 'Invalid Input' });
    }

    const product = await ProductModel.findById(params.ProductId)

    if (!product) {
      return res.status(404).send({
        message: 'Product Not Found',
      });
    }

    await ProductModel.findByIdAndDelete(product.id);
    return res.status(200).send({ message: 'product Deleted successfully' });
  } catch (error) {
    console.log('Error while productUpdate', error);
    return res.status(500).send(error);
  }
}

module.exports = deleteProduct;
