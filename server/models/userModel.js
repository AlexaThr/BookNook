const mongoose = require("mongoose");
// import Book from "../../client/Models/bookModel";
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const bookSchema = new Schema({
    title: String,
    author: String,
    // genre: String,
    // pages: Number,
    coverUrl: String,
});

const Book = mongoose.model('Book', bookSchema);


const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    books: []
});

userSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
        this.password = await bcrypt.hash(this.password, salt);
        return next();
    } catch (err) {
        return next (err.message);
    }
});

userSchema.methods.verifyPass = async function (password) {
    return bcrypt.compare(password, this.password);
}

const User = mongoose.model("User", userSchema);
module.exports = { Book, User };