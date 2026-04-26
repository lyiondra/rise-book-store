
const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    rarityScore: { type: Number, default: 0 },
    condition: { type: String, enum: ['Mint', 'Fine', 'Good', 'Fair'], default: 'Fine' },
    description: { type: String },
    isbn: { type: String, unique: true },
    stock: { type: Number, default: 1 },
    imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
