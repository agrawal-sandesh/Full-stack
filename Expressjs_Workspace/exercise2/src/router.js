const express=require('express');
const router=express.Router();

router.post('/api/marks',(req,res,next)=>{
    flag=0;
    for(let i=0;i<4;i++){
        if(req.body.marks[i]<50){
            flag=1;
            req.body.totalScore=req.body.totalScore+req.body.marks[i];
        }
        else{
            req.body.totalScore=req.body.totalScore+req.body.marks[i];
        }
    }
    next();
    }),
    router.post('/api/marks',(req,res)=>{
            let average=req.body.totalScore/4;
            if(flag==1){
                res.send("Total Marks "+req.body.totalScore+". Not eligible for scholarship");
            }
            else if(average>50 && average<70){
                res.send("Total Marks "+req.body.totalScore+". Obtained Grade C. Eligible for scholarship 5% scholarship");
            }
            else if(average>70 && average<85){
                res.send("Total Marks "+req.body.totalScore+". Obtained Grade B. Eligible for scholarship 15% scholarship");
            }
            else if(average>85 && average<=100){
                res.send("Total Marks "+req.body.totalScore+". Obtained Grade A. Eligible for scholarship 20% scholarship");
            }
    })
    module.exports=router;