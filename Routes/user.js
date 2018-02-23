const express=require('express'),
	  users=require('../models/user'),
	  jwt=require('jsonwebtoken'),
	  secret='helloworld',
	  router=express.Router({mergeParams:true});

router.post('/login',(req,res)=>{
	users.findOne({username:req.body.username},(err,user)=>{
		if (err)
		{
			res.json({success:false,msg:'something went wrong!!'});
		}
		if (!user)
		{
			res.json({success:false,msg:'User not Registered'});
		}
		else
		{
			if(user.password==req.body.password)
			{
				var token=jwt.sign({data:user},secret);
				res.json({success:true,token:'JWT '+token,user:{username:user.username,name:user.name}});
			}
			else
			{
				res.json({success:false,msg:'Incorrect Password'});
			}
		}
	})

});



module.exports=router;
