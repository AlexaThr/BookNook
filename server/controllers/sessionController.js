const Session = require("../models/sessionModel");

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
    try {
        const { ssid } = req.cookies;

        const userSession = await Session.findOne({cookieId: ssid});
        console.log("userSession ===> ", userSession," ", Boolean(userSession));
        if (userSession) {
            return next();
        }
        return res.status(404).redirect("/signup");
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

// const Session = require("../models/sessionModel");

// const sessionController = {};

// sessionController.startSession = async (req, res, next) => {
//     try {
//         const { ssid } = req.cookies;
//         const userSession = await Session.findOne({ cookieId: ssid });

//         if (userSession) {
//             // If the session exists, set the user ID from the session in res.locals
//             res.locals.userId = userSession.userId;
//         } else {
//             // If the session does not exist, create a new session with the user ID
//             const { _id } = res.locals.user; // Assuming user ID is available in res.locals.user
//             res.locals.userId = _id;
//             await Session.create({ cookieId: ssid, userId: _id });
//         }

//         return next();
//     } catch (err) {
//         return next(err.message);
//     }
// };

// module.exports = sessionController;