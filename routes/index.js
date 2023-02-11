var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' },
  );
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
/* GET project page. */
router.get('/Products', function(req, res, next) {
  res.render('Products', { title: 'Products' });
});
/* GET Services page. */
router.get('/Services', function(req, res, next) {
  res.render('Services', { title: 'Services' });
});

/* GET Contact page. */
router.get('/Contact', function(req, res, next) {
  res.render('Contact', { title: 'Contact' });
});

module.exports = router;