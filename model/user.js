const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Phone: Number,
    Password: String,
    City: String,
    State: String,
    Gender: String,
    HearAboutUs: [{type:String}]
}, {
    timestamps: true,
})

const User = new mongoose.model("User", userSchema);
module.exports = User