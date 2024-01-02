const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://aksoni0520:dXTfwa8DfQzjbsew@auth.wabax4u.mongodb.net/?retryWrites=true&w=majority").then(()=>{
    console.log("connection successfull")
}).catch((e)=>{
    console.log(`error is ${e}`)
})