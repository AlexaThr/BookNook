const {Book, User} = require('../models/userModel');
const Session = require('../models/sessionModel');

const bookController = {};

bookController.addBookToReadingList = async (req, res, next) => {
    try {
        const userId = req.cookies.ssid;
        const bookId = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const newBook = await Book.create(req.body);
        user.books.push(newBook);
        res.locals.bookInfo = { updatedReadingList: user.books };
        await user.save();

        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

bookController.getUserReadingList = async(req, res, next) => {
    try {
        const userId = req.cookies.ssid;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.locals.toRead = { readingList: user.books };

        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = bookController;