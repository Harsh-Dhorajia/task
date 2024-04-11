const ProductModel = require('../../models/Product.model');

const createProduct = async (req, res, next) => {
  try {
    const { body: { title, description, inventoryCount }, user } = req;

    if (user.role !== 'ADMIN') {
      return res.status(401).send({message: "You are not allowed to create the product"});
    }
    const createdProduct = await ProductModel.create({
      title,
      description,
      inventoryCount,
      createdBy: user._id,
    });

    return res.status(201).send(createdProduct);
  } catch (error) {
    console.log('error :>> ', error);
    res.status(500).send(error)
  }
}

module.exports = createProduct;
