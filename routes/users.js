var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond GET all with user');
});

/* GET one users listing. */
router.get('/users/:id', function(req, res, next) {
  res.send('respond GET one user');
});
/* POST  users listing. */
router.post('/users', function(req, res, next) {
  res.send('respond POST user');
});

/* PUT one users listing. */
router.put('/users/:id', function(req, res, next) {
  res.send('respond PUT one user');
});

/* DELETE one users listing. */
router.delete('/users/:id', function(req, res, next) {
  res.send('respond DELETE one user');
});
module.exports = router;
