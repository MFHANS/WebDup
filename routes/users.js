var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
const dataUser = require('../models/model');

/* GET users listing. */
router.get('/users/api', async function(req, res, next) {
  //res.send('respond GET all with user');
  try {
    const data = await dataUser.find({});
    res.send(data);
  } catch (error) {
    res.status(400).send({msg:"data tidak ada"})
  }
});
/* GET users listing. */
router.get('/users/table', async function(req, res, next) {

  try {
    const data = await dataUser.find({});
    //const alertMessage = req.flash("alertMessage")
    //const alertStatus = req.flash("alertStatus")
    //const alert = {message: alertMessage, status: alertStatus}
    res.render('getalldata', {
      data,
      title:"halo all table"});
    //req.flash();  
  } catch (error) {
    //res.redirect('/users/api');
    res.status(400).send({msg:"error lurr"})
  }
  
});

/* GET one users listing. */
router.get('/users/:id', function(req, res, next) {
  res.send('respond GET one user');
});

/* POST  users listing. */
router.post('/users', async function(req, res, next) {
  //res.send('respond POST user');
  //const datas = await dataUser(req.body)
  const ada = await dataUser.findOne({email: req.body.email})
  try {
    if (ada){
      return res.status(400).send("user sudah ada")
    }else{
      datas = new dataUser({
        nama: req.body.nama,
        email: req.body.email,
        password: req.body.password
      })
      const salt = await bcrypt.genSalt(10);
      datas.password = await bcrypt.hash(datas.password, salt);
      await datas.save()
      res.send(datas);
    }
    //datas.save();
    //res.redirect('/users/api')
    console.log(req.body)
  } catch {
    res.status(400).send({msg:"gagal input"})
  }
});

router.post('/users', async function(req, res, next) {
  const ada = await dataUser.findOne({email:req.body.email});
  try {
    if(!ada){
      res.redirect('/')
    }else {
      bcrypt.compare(req.body.password, dataUser.password, function (err,res){
        if(res == true){
          res.redirect('/')
        }else {
          res.send('incoreect password');
          res.redirect('/error')
        }
      })
    }
  } catch (error) {
    
  }

});

/* PUT one users listing. */
router.put('/users/:id', function(req, res, next) {
  res.send('respond PUT one user');
});

/* DELETE one users listing. */
router.delete('/users/:id', async function(req, res, next) {
  
  try {
    const { id } = req.params;
    const datas = await dataUser.findOne({_id:id});
    await datas.remove();
    res.redirect('/users/table')
  } catch (error) {
    res.send({msg:"error lurr"})
  }
});
module.exports = router;
