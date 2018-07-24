const express = require('express');
const app = express();
const morgan = require('morgan')
const productRoutes = require('./api/routes/product')
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'));

// Route which sould handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;