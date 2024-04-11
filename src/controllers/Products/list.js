const ProductModel = require('../../models/Product.model');

const ProductList = async (req, res, next) => {
  try {
    const { user, query } = req;
    const { limit = 10, skip = 0 } = query;

    const Products = await ProductModel
      .find({ createdBy: user._id })
      .skip(skip)
      .limit(limit);

    const count = await ProductModel.countDocuments({ createdBy: user._id });

    const response = {
      data: Products,
      count,
    }
    return res.send(response);
  } catch (error) {
    console.log('error while ProductList :>> ', error);
    res.status(500).send(error);
  }
}

module.exports = ProductList;
