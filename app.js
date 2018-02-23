 var express=require('express'),
	body=require('body-parser'),
	db=require('mongoose'),
	passport=require('passport'),
	path=require('path'),
	cors=require('cors'),
	app=express();

app.use(body.urlencoded({extended:true}));
app.set('view engine','html');
app.use(body.json());

// db.connect("mongodb://localhost/healthvings");
db.connect("mongodb://<user>:<password>@ds245228.mlab.com:45228/healthvings");

db.connection.on('connected',()=>{
	console.log('connected to database!!');
})

db.connection.on('error',(err)=>{
	console.log('Error connecting to database!!');
})

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'index')));
require('./config/passport-jwt')(passport);
app.use(cors());


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index/index.html'));
});

var userRoute=require('./Routes/user');
var postRoute=require('./Routes/formdata');

app.use('/user',userRoute);
app.use('/post',postRoute);

app.listen('3000',function () {
	console.log('Server Started!!');
})
