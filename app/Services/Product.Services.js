let productData = require('../data/ProductData.json');

const getProduct = () => {
    if (productData) {
        return productData;
    } else {
        return false;
    }
};

const getById = (id) => {
    const productIndex = productData.findIndex((item => item.id == id))

    if (productData && productIndex !== -1) {
        const itemProduct = productData[productIndex];
        return itemProduct;
    } else {
        return false;
    }
};

const add = (product) => {
    const newProduct = {
        id: Math.random(),
        ...product,
    }
    productData = [...productData, newProduct];
    return newProduct;
}

const update = (id, product) => {
    const productIndex = productData.findIndex((item => item.id == id));

    if (productIndex !== -1) {
        const productOld = productData[productIndex];
        const updatedProduct = {
            ...productOld,
            ...product,
        }
        productData[productIndex] = updatedProduct;
        return updatedProduct;
    } else {
        return false;
    }
};

const deleted = (id) => {
    const productIndex = productData.findIndex((item => item.id == id));

    if (productIndex !== -1) {
        const deletedProduct = productData[productIndex]
        productData = productData.filter((item => item.id != id));
        return deletedProduct;
    } else {
        return false;
    }
}


module.exports = {
    getProduct,
    getById,
    add,
    update,
    deleted
}