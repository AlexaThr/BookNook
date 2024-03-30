const Session = require("../models/sessionModel");

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
    try {
        const { ssid } = req.cookies;

        const userSession = await Session.findOne({ ssid });

        if (!userSession) {
            return res.status(404).redirect("/signup");
        }
        return next();
    } catch (err) {
        return next(err.message);
    }
};

sessionController.startSession = async (req, res, next) => {
    try {
        const { ssid = res.locals.user._id } = req.cookies;
        res.locals.session = await Session.create({ cookieId: ssid });
        return next();
    } catch (err) {
        return next(err.message);
    }
};

module.exports = sessionController;