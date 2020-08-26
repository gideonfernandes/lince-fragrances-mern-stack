const Yup = require('yup');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const User = require('../models/User');

class UserController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      lastName: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails.' });
    };

    const {
      name, lastName, email, password,
    } = request.body;

    // Check if user exists
    let user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({ error: 'User already exists!' });
    };

    user = new User({
      name,
      last_name: lastName,
      email,
      password,
    });

    // Encrypt password
    user.password = await bcrypt.hash(password, 8);
    await user.save();

    return response.json({
      user: {
        id: user._id,
        name: user.name,
        last_name: user.last_name,
      },
      token: jwt.sign({ id: user._id }, config.get('jwtSecret'), {
        expiresIn: config.get('jwtExpiresIn'),
      }),
    });
  };
};

module.exports = new UserController();
