var express = require('express'),
	bodyParser = require('body-parser'),
  cookieParser = require('cookie-parser'),
  passport = require('passport'),
  LocalStrategy = require('passport-local').Strategy;


var app = express();
app.listen(process.env.PORT || 3000);

app.use(bodyParser());
app.use(cookieParser());
app.use(session({secret: 'baeMaxLoving'}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/client/", express.static(__dirname + '/client/'));


//Initial File Serve
app.get("/", function (req, res){
  res.sendFile(__dirname + "/client/index.html");
});







/// MONGOOOSE Database Linking ****

var mongoose = require('mongoose');

var connectDBLink;

if (process.env.NODE_ENV == "production") {
  connectDBLink = "mongodb://localhost/igrouply";
} else if (process.env.NODE_ENV == "development") {
  connectDBLink = "mongodb://localhost/igrouply";
}
  else {
  connectDBLink = "mongodb://localhost/igrouply";
}

mongoose.connect(connectDBLink);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log("DB opened");
});

//***********************

/////PASSPORT Session///////////////

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
  },
  function (email, password, done) {
    User.findOne({email: email}, function (err, user) {
      if (err) {return done(err);}
      if (!user) {
        console.log("Incorrect email");
            return done(null, false, { info: 'Incorrect email.' });
          }
          if (!(user.password == password)) {
            console.log("Incorrect password");
            return done(null, false, { info: 'Incorrect password.' });
          }
          return done(null, user);  
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});