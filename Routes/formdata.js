const express=require('express'),
  posts=require('../models/post'),
  passport=require('passport'),
  jwt = require('jsonwebtoken');
  router=express.Router({mergeParams:true});


 router.post('/new',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
 	posts.create(req.body,(err,post)=>{
 		if(err) res.json({success:false,msg:"Some thing Went Wrong!"});
 		if(!post) res.json({success:false,msg:"Some thing Went Wrong!"});
 		if(post) res.json({success:true,msg:"Post saved"});
 	})
 });

 module.exports=router;