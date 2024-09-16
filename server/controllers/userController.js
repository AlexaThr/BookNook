// Here we are checking our user database (getAllUsers)
// We are creating accounts and pushing them to the database (createUser)
// We are signing in when the account corresponds to a user in the database (verifyUser)

const { User } = require("../models/userModel");

const userController = {};

userController.getAllUsers = (req, res, next) => {
    User.find({}, (err, users) => {
        if (err){
            return next('Error in userController.getAllUsers: ' + JSON.stringify(err));
        };
        res.locals.users = users;
        return next();
    })
}

userController.createUser = async (req, res, next) => {
    console.log("req.body ==> ", req.body);

    try {
        const { username, password } = req.body;
        if (
            !username ||
            !password ||
            (typeof username !== "string" && typeof password !== "string")
        ) {
            return next("Error in userController.createUser: Invalid inputs");
        }
        const newUser = await User.create({ username, password });
        console.log("newUser ==> ", newUser);
        res.locals.user = newUser;
        console.log(res.locals.user);
        return next();
    } catch (err) {
        return next(err.message);
    }
};

userController.verifyUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).redirect("/login");

        const auth = await user.verifyPass(password);
        if (!auth) return res.status(401).redirect("/login");

        res.locals.user = user;
        return next();
    } catch (err) {
        return next(err.message);
    }
};

userController.addToReadingList = async (req, res, next) => {
    try {
        const { userId, bookId } = req.body;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (user.books.includes(bookId)) {
            return res.status(400).json({ message: 'Book already in reading list' });
        }

        user.books.push(bookId);
        await user.save();

        return res.status(200).json({ message: 'Book added to reading list successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = userController;