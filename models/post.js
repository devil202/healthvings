const db=require('mongoose');

const postSchema=db.Schema({
	title:{type:String,required:true},
	content:{type:String,required:true},
});

module.exports=db.model('Post',postSchema); 