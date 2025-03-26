const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // console.log("Mongo Uri %s", process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
    } catch (e) {
        console.log(`${e}`)
    }
}

module.exports = connectDB;