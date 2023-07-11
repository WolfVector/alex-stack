const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oidc');
var GitHubStrategy = require('passport-github2').Strategy;
//const { route } = require('.');

var router = express.Router();

/**********************  Strategies ***********************/
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/oauth2/redirect/google',
  scope: [ 'profile' ]
}, function verify(issuer, profile, cb) {
  return cb(null, profile);
}));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function verify(accessToken, refreshToken, profile, cb) {
    return cb(null, profile)
  }
));
/************************************************************ */

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    console.log(user)
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

router.get('/login/federated/google', passport.authenticate('google'));
router.get('/oauth2/redirect/google', passport.authenticate('google', {
  successRedirect: 'http://localhost:5173',
  failureRedirect: 'http://localhost:5173/login'
}));

router.get('/login/github', passport.authenticate('github', { scope: [ 'user:email' ] }));
router.get('/github/callback', passport.authenticate('github', { 
    successRedirect: 'http://localhost:5173',
    failureRedirect: 'http://localhost:5173/login'
}));

router.get('/get-user', function(req, res) {
  console.log(req.user)

  res.json({ ok: true })
})

router.post('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('http://localhost:5173');
  });
});

module.exports = router;