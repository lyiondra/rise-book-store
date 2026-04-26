const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const rareBooks = [
    {
        title: "The Alchemist's Grimoire",
        author: "Unknown",
        price: 1250.00,
        rarityScore: 95,
        condition: "Fine",
        description: "A 17th-century manuscript detailing early chemical transitions. Vellum bound.",
        isbn: "R-9901-AC",
        stock: 1,
        imageUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353"
    },
    {
        title: "Technological Singularity: First Edition",
        author: "Vernor Vinge",
        price: 450.00,
        rarityScore: 82,
        condition: "Mint",
        description: "Original 1993 symposium paper. Signed by the author.",
        isbn: "R-2023-VV",
        stock: 2,
        imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646"
    },
    {
        title: "Digital Consciousness Vol. 1",
        author: "Lyiondra M.",
        price: 85.00,
        rarityScore: 70,
        condition: "Mint",
        description: "A limited run exploring the intersection of branding and tech-philosophy.",
        isbn: "R-2026-LM",
        stock: 10,
        imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c"
    },
    {
        title: "The Great Gatsby (1925)",
        author: "F. Scott Fitzgerald",
        price: 3500.00,
        rarityScore: 99,
        condition: "Good",
        description: "First edition, first printing. Minimal shelf wear on the spine.",
        isbn: "R-1925-GG",
        stock: 1,
        imageUrl: "https://images.unsplash.com/photo-1543005120-01ae509462f3"
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(">>> [SYSTEM] CONNECTED TO CLUSTER FOR SEEDING");

        // Clear existing data to avoid duplicates during testing
        await Book.deleteMany({});
        console.log(">>> [SYSTEM] INVENTORY PURGED");

        await Book.insertMany(rareBooks);
        console.log(">>> [SYSTEM] RARE BOOK DATA INJECTED SUCCESSFULLY");

        mongoose.connection.close();
        console.log(">>> [SYSTEM] CONNECTION CLOSED");
    } catch (err) {
        console.error(">>> [ERROR] SEEDING FAILED:", err);
    }
};

seedDB();
