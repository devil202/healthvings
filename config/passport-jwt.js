var JwtStrategy = require('passport-jwt').Strategy,
	ExtractJwt = require('passport-jwt').ExtractJwt,
	secret='helloworld',
	users=require('../models/user');

module.exports=function(passport)
{
	var opts = {}
	opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
	opts.secretOrKey = secret;
	passport.use(new JwtStrategy(opts, function(payload, done) {
	    users.findById(payload.data._id, function(err, user) {
	        if (err) {
	            return done(err, false);
	        }
	        if (user) {
	            return done(null, user);
	        } else {
	            return done(null, false);
	        }
	    });
	}));
}