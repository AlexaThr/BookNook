const {Book, User} = require('../models/userModel');
const Session = require('../models/sessionModel');

const bookController = {};

bookController.addBookToReadingList = async (req, res, next) => {
    console.log("addToReadingList controller")
    console.log("req.body ===> ", req.body);

    try {
        const userId = req.cookies.ssid;
        console.log("ssid ===> ", req.cookies.ssid);

        const bookId = req.body; // Assuming the bookId is sent in the request body

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const newBook = await Book.create(req.body);
        console.log(newBook);

        // Find the book by ID
        // const book = await Book.findById(bookId);
        // if (!book) {
        //     return res.status(404).json({ message: 'Book not found' });
        // }

        // Add the book's ID to the user's reading list
        user.books.push(newBook);
        res.locals.bookInfo = { updatedReadingList: user.books };
        await user.save();

        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

bookController.getUserReadingList = async(req, res, next) => {
    console.log("fetch request getUserReadingList")
    try {
        const userId = req.cookies.ssid;
        console.log("getUserReadingList, userId ===> ", userId);

        // Find the user by ID and populate the books field
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log(user);
        res.locals.toRead = { readingList: user.books };

        return next();
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = bookController;