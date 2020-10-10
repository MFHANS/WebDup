var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/input', function(req, res, next) {
  res.render('input', { title: 'Express' });
});

module.exports = router;
