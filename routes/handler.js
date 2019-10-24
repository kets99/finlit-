var express = require('express');
var router = express.Router();
var path = require('path');
//var queries = require(path.join(__dirname,'../model/queries'));
// const mime = require('mime');
//var multer = require('multer');
var request = require('request');
//var query = require('.././model/queries');

router.get('/',(req,res)=>{
    console.log("here?");
   res.render('packages',{layout : 'packages.handlebars'});

});


router.get('/basics',(req,res)=>{
    console.log("here?");
   res.render('basics',{layout : 'basics.handlebars'});

});


router.get('/banks',(req,res)=>{
    console.log("here?");
   res.render('banks',{layout : 'banks.handlebars'});

});


router.get('/loans',(req,res)=>{
    console.log("here?");
   res.render('loans',{layout : 'loans.handlebars'});

});


module.exports=router;
