const mongoose =require("mongoose");
const HomeUserSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Phone: Number
})

const HomeUser=new mongoose.model("homeuser",HomeUserSchema);
module.exports =HomeUser