const Yup = require('yup');
const Purchase = require('../models/Purchase');
const User = require('../models/User');

class PurchaseController {
  async index(request, response) {
    const purchases = await Purchase.find();

    return response.json(purchases);
  };

  async store(request, response) {
    const schema = Yup.object().shape({
      total: Yup.number().required(),
      order: Yup.string().required(),
      order: Yup.array().of(
        Yup.object().shape({
          product_id: Yup.string().required(),
			    amount: Yup.number().required(),
			    subtotal: Yup.number().required(),
        }),
      ),
    });

    // Check if request body is valid
    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    // Check if user exists
    const { client_id } = request.params;
    const userExists = await User.findById(client_id);
    if (!userExists) {
      return response
        .status(401)
        .json({ error: 'Only valid users can make purchases.' });
    };

    const {
      order, total
    } = request.body;

    await Purchase.create({
      buyer: request.params.client_id,
      order,
      total,
    });

    // Get buyer data
    const buyer = await User.findById(client_id).select('name last_name');

    return response.json({
      user_id: request.params.client_id,
      order,
      total,
      buyer,
    });
  };
};

module.exports = new PurchaseController();
