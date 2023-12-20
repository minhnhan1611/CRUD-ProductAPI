const express = require('express');
const productRouter = require('./Product.Router');
const router = express.Router();

router.use("/products", productRouter);

module.exports = router;