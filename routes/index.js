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


module.exports = router;

