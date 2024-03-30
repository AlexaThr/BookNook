const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
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

module.exports = mongoose.model("User", userSchema);