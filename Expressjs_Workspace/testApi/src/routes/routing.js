const express = require('express')
const router = express.Router();
router.get('/', (req, res) =>  {
  res.send('Welcome')
  });
router.post('/login',(req,res) => { 
    console.log(req.body); 
    res.send("Username is "+req.body.username +" Registered"); 
 });
module.exports = router
