const express = require('express')
const router = express.Router();


router.get('/x*', function (req, res) { 
  res.send('Route 1');
});

router.get('/xyz', function (req, res) {
   res.send('Route 2');
});

router.get('/xyz*', function (req, res, next) {

res.send('Route 3');

next();

});

router.get('/xyz', function (req, res) { 
  res.send('Route 4');
});



module.exports = router
