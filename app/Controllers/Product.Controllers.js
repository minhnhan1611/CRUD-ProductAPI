const { getById, add, update, deleted, getProduct } = require("../Services/Product.Services");

const getProductAll = (req, res) => {
    const ProductList = getProduct();
    if (ProductList) {
        res.status(200).send(ProductList);
    } else {
        res.status(404).send("Not Found!");
    }
};

const getProductById = (req, res) => {
    const { id } = req.params;

    const ProductById = getById(id);
    if (ProductById) {
        res.status(200).send(ProductById);
    } else {
        res.status(404).send("Not Found!");
    }
};

const addProduct = (req, res) => {
    const product = req.body

    const createProduct = add(product);
    res.status(201).send(createProduct);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const product = req.body;

    const updatedProduct = update(id, product);
    if (updatedProduct) {
        res.status(200).send(updatedProduct);
    } else {
        res.status(404).send("Not Found!");
    }
};

const deleteProduct = (req, res) => {
    const { id } = req.params;

    const deleteProduct = deleted(id);
    if (deleteProduct) {
        res.status(200).send(deleteProduct);
    } else {
        res.status(404).send("Not Found!");
    }
}

module.exports = {
    getProductAll,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}