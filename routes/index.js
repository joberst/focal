var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
    var badgeIcons = [];
	appdata.badges.forEach(function(item) {
		badgeIcons = badgeIcons.concat(item.img);
	});
  res.render('index', { 
  	title: 'Home',
  	img: 'badgeIcons'
   });
});


/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

/* GET resources page. */
router.get('/resources', function(req, res, next) {
  res.render('resources', { title: 'Resources' });
});

/* GET join page. */
router.get('/join', function(req, res, next) {
  res.render('join', { title: 'Join' });
});

module.exports = router;

