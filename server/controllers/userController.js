// Here we are checking our user database (getAllUsers)
// We are creating accounts and pushing them to the database (createUser)
// We are signing in when the account corresponds to a user in the database (verifyUser)

const User = require("../models/userModel");

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
    try {
        const { username, password } = req.body;
        if (
            !username ||
            !password ||
            (typeof username !== "string" && typeof password !== "string")
        ) {
            return next("Error in userController.createUser: Invalid inputs");
        }
        res.locals.user = await User.create({ username, password });
        return next();
    } catch (err) {
        return next(err.message);
    }
};

userController.verifyUser = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(404).redirect("/signup");

        const auth = await user.verifyPass(password);
        if (!auth) return res.status(401).redirect("/signup");

        res.locals.user = user;
        return next();
    } catch (err) {
        return next(err.message);
    }
};

module.exports = userController;