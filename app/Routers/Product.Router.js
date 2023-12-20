const express = require('express');
const productRouter = express.Router();
const { getProductAll, getProductById, addProduct, updateProduct, deleteProduct } = require('../Controllers/Product.Controllers');
const { productValidation } = require('../Middlewares/Validations/Product.Validation');


// Lấy Product 
productRouter.get("/", getProductAll);

// Lấy Product theo id
productRouter.get("/:id", getProductById);

// Thêm Product
productRouter.post("/", productValidation, addProduct);

// Update Product theo id
productRouter.put("/:id", updateProduct);

// Delete Product theo id
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;