const express = require('express')
const router = express.Router()
const User=require("../model/user");
const Bcrypt=require("bcrypt");

router.post('/signup',async function (req, res) {
    const data=await User.findOne({Email:req.body.Email});
    if(data){
        console.log(data);
        res.send("User Already Exist");
    }
    else{
        var Pass=req.body.Password
        Pass=Bcrypt.hashSync(Pass,7);
        const NewUser= new User({
            Name:req.body.Name,
            Email:req.body.Email,
            Phone:req.body.Phone,
            Password:Pass,
            City:req.body.City,
            State:req.body.State,
            Gender:req.body.Gender,
            HearAboutUs:req.body.HearAboutUs
        })
        await NewUser.save();
        const user=await User.findOne({Email:req.body.Email});
        res.send({status:user});
    }
});
router.post('/login',async function (req, res) {
    const data=await User.findOne({Email:req.body.Email});
    if(!data){
        res.send("User Doesn't Exist");
    }
    else{
        var Pass=req.body.Password
        if(Bcrypt.compareSync(Pass,data.Password)){
            res.send({token:data});
        }
        else{
            res.send("Incorrect Password");
        }
    }
});


module.exports = router;