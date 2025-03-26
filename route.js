const express = require('express');

const productController = require('./controllers')
const productRouter = express.Router()

productRouter.get("/getMethod",productController.get)
productRouter.post("/postMethod",productController.post)
productRouter.put("/putMethod", productController.put);
productRouter.delete("/deleteMethod",productController.delete);

module.exports = productRouter;