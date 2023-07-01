const mongoose = require("mongoose");
const user = mongoose.Schema(
    {
        email: { type: String, unique: true, require: true },
    }
);
const UserModel = mongoose.model("UserModel", user);
module.exports = { UserModel };