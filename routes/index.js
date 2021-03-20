var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/about-us", (req, res) =>{
  res.render("about-us");
})

router.get("/createPost", (req, res) =>{
  res.render("createPost");
})

router.get("/createPost", (req, res) =>{
  res.render("createPost", {name: req.query.name});
})

router.post("/", (req,res) => {
  res.render('index', { title: 'Express' , name: req.body.name});  
})
module.exports = router;
