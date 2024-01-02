const express = require('express')
const router = express.Router()
const HomeUser=require("../model/homeUsers");

router.post('/edit', async function (req, res){
    const id=req.body.Id;
    const user= await HomeUser.updateOne({_id:id},{
        Name:req.body.Name,
        Phone:req.body.Phone,
        Email:req.body.Email
    });
    res.send({user:user})
});

router.post('/add', async function (req, res){
    const user= new HomeUser({
        Name:req.body.Name,
        Phone:req.body.Phone,
        Email:req.body.Email
    });
    await user.save();
    res.send({status:true})
});

router.post("/getallusers",async(req,res)=>{
    const data=await HomeUser.find({});
    res.send({HomeUser:data});
})


module.exports = router;