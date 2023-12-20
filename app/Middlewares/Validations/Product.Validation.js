const productValidation = (req, res, next) => {
    const { name, amount, price, sale } = req.body;

    if (name && amount >= 1 && price && sale) {
        next();
    } else {
        res.status(500).send("Sai định dạng. Vui lòng nhập lại!");
    }
}

module.exports = {
    productValidation
}