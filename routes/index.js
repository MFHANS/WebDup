var express = require('express');
var router = express.Router();

// * GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WebDup' });
});


// * routing page /aboutus/sejarah
router.get('/aboutus/sejarah', async (req, res) => {
  await res.render('sejarah', {title:'webdup'});
})
module.exports = router;
