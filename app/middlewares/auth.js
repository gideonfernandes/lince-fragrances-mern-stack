const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async (request, response, next) => {
  // Get token from header
  const token = request.header('auth-token');

  // Check if not token
  if (!token) {
    return response.status(401).json({ error: 'Token is not provided.' });
  };

  // Verify token
  try {
    const decoded = await promisify(jwt.verify)(token, config.get('jwtSecret'));
    request.userId = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'Token is not valid.' });
  };
};
