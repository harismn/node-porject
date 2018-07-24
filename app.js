const express = require('express');
const app = express();
const morgan = require('morgan')
const productRoutes = require('./api/routes/product')
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'));

// Route which sould handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.statusCode = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;