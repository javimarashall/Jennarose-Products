const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt');

const userSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        required: "username is required"
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        trim: true,
        required: "Password is required",
        validate: [({ length }) => length >= 8, "Password needs be 8 characters or longer."]
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;