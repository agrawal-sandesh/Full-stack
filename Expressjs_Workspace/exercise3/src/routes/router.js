const express=require('express');
const packageData=require('../packageData.json');
const router=express.Router();

router.get('/getPackages',(req,res)=>{
    res.send(packageData);
    res.status(200);
})

router.get('/getTrackData/:trekName',(req,res)=>{
    let Trekname=req.params.trekName;
    for(let i=0;i<packageData.length;i++){
        if(packageData[i].trekName==Trekname){
            res.send(packageData[i].packageName);
            res.status(200);
        }
    }
})

module.exports=router;
