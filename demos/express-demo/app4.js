var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var port = process.env.PORT || 8080;
var router = express.Router();

router.use(function(req, res, next) {
  console.log('There is a requesting.');
  var time = new Date();
  console.log("当前时间："+time)
  next();
});

router.get('/', function(req, res) {
  var name= req.query.name || 'test';
  res.send('<h1>Hello '+name+'</h1>');
});


router.get('/:name', function(req, res) {
  res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function (req, res) {
  var name = req.body.name;
  res.json({message: 'Hello ' + name});
});


app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);
