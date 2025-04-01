const productModel = require('./model');

const productController = {};

productController.get = async (req, res) => {
    const { author } = req.query;
    try {
        const data = author ? await productModel.find({ author }) : await productModel.find({});
        res.status(200).json({
            message: "GET request successful",
            data  // Returning actual JSON instead of converting it into a string
        });
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Sorry for the inconvenience, we are working to fix the problem. Kindly be with us." });
    }
};


productController.post = async (req, res) => {
    const newDocument = req.body;
    try {
        await productModel.create(newDocument);
        res.status(201).json({ message: "POST request received", newDocument });
    } catch (e) {
        console.error(e);
        res.send({ Message: `Sorry for the inconveneice, we are working the problem to fix it .Kindly, Be With US.....` })
    }
};

productController.put = async (req, res) => {
    const { key } = req.query;
    const data = req.body;
    try {
        await productModel.findOneAndUpdate({ author: key }, data)
        res.status(200).json({ message: `PUT request received for key: ${key}`, data });
    } catch (e) {
        console.error(e);
        res.send({ Message: `Sorry for the inconveneice, we are working the problem to fix it .Kindly, Be With US.....` })
    }
};

productController.delete = async (req, res) => {
    try {
        await productModel.findOneAndDelete(req.query);
        res.status(200).json({ message: "DELETE request received" });
    } catch (e) {
        res.send({ Message: `Sorry for the inconveneice, we are working the problem to fix it .Kindly, Be With US.....` })
        console.error(e);
    }
};

module.exports = productController;