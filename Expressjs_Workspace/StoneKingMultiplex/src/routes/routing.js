const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/getAllShows',(req,res)=>{
    fs.readFile('./showDetails.txt','utf-8',(err,content)=>{
        if(!err){
            res.send(content);
        }
        else{
            throw err;
        }
    })
});

router.post('/bookMovie',(req,res)=>{
    fs.appendFile('./movieBooking.txt',JSON.stringify(req.body),(err)=>{
        if(!err){
            fs.readFile('./movieBooking.txt','utf-8',(err,content)=>{
                if(!err){
                    res.send(content);
                }
                else{
                    throw err;
                }
            })
        }
        else{
            throw err;
        }
    })
})

module.exports=router
