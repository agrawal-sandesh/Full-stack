const express=require('express');
const app=express();
const packageData=require('./packageData.json');

app.get('/getPackages',(req,res)=>{
    res.send(packageData);
    res.status(200);
})

app.get('/getTrackData/:trekName',(req,res)=>{
    let Trekname=req.params.trekName;
    for(let i=0;i<packageData.length;i++){
        if(packageData[i].trekName==Trekname){
            res.send(packageData[i].packageName);
            res.status(200);
        }
    }
})

app.listen(3000);
console.log("Server started on port 3000!");
