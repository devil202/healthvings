const db=require('mongoose');

const userSchema=db.Schema({
	name:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true},
	username:{type:String,required:true},
});

module.exports=db.model('user',userSchema); 