const express = require('express');
const productRouter = require('./route');
const connectDB = require('./db');

const app = express();
app.use(express.json())

connectDB()

app.use("/", productRouter);
app.listen(5000, () => {
    console.log("Server is Up and Listening on 5000");
})