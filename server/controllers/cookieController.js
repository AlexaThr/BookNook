const cookieController = {};

cookieController.setCookie = (req, res, next) => {
    res.cookie("codesmith", "hi");
    res.cookie("secret", Math.floor(Math.random() * 100));
    return next();
}

cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie("ssid", res.locals.user._id, { httpOnly: true });
    return next();
};

module.exports = cookieController;