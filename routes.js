const { Router } = require('express');

const routes = new Router();

const UserController = require('./app/controllers/UserController');
const SessionController = require('./app/controllers/SessionController');
const ProductController = require('./app/controllers/ProductController');
const PurchaseController = require('./app/controllers/PurchaseController');
const StockController = require('./app/controllers/StockController');
const authMiddleware = require('./app/middlewares/auth');

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.get('/products', authMiddleware, ProductController.index);
routes.get('/products/:product_id', authMiddleware, ProductController.show);
routes.post('/products', authMiddleware, ProductController.store);

routes.get('/purchases', authMiddleware, PurchaseController.index);
routes.post('/purchases/:client_id', authMiddleware, PurchaseController.store);

routes.get('/stocks/:product_id', authMiddleware, StockController.show);
routes.post('/stocks/:product_id', authMiddleware, StockController.store);

module.exports = routes;
