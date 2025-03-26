const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    author: { type: String, required: true },
    Genere: {
        type: String,
        enum: ["Fantasy", "Horror", "Sci-Fiction", "Self-Growth"],
        required: true
    },
    description: { type: String, required: true, unique: true }
}, {
    timestamps: true
});

module.exports = mongoose.model("Product", schema);