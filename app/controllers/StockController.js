const Yup = require('yup');
const Stock = require('../models/Stock');
const Product = require('../models/Product');

class StockController {
  async store(request, response) {
    const schema = Yup.object().shape({
      amount: Yup.number().required(),
    });

    // Check request data
    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const { product_id } = request.params;

    // Check if product exists
    const productExists = await Product.findById(product_id);
    if (!productExists) {
      return response
        .status(401)
        .json({ error: 'You can only create a stock for a valid product.' });
    };

    // Check if stock exists
    const stockAlreadyExists = await Stock.findOne({ product: product_id });
    if (stockAlreadyExists) {
      return response
        .status(400)
        .json({ error: 'The stock for this product already exists.' });
    };

    const stock = await Stock.create({
      product: product_id,
      amount: request.body.amount,
    });

    return response.json(stock)
  };

  async show(request, response) {
    const { product_id } = request.params;

    // Check if stock exists
    const stock = await Stock.findOne({ product: product_id });
    if (!stock) {
      return response
        .status(400)
        .json({ error: 'Stock for this product does not exists.' });
    };

    // Get current product data
    const product = await Product.findById(product_id)
      .select('title price image');

    return response.json({
      id: stock._id,
      product_id,
      amount: stock.amount,
      product,
    });
  };
};

module.exports = new StockController();
