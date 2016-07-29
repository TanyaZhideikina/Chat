var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds033015.mlab.com:33015/chat1558');
var messSchema = new mongoose.Schema({
  item:String,
  name:String
});
var Mess = mongoose.model('Mess', messSchema);
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports = function (app) {

app.get('/',function (req,res) {
Mess.find({}, function (err, data) {
    if (err) throw err;
    res.render('todo', {data: data});
  });
});

app.post('/', urlencodedParser, function (req,res) {
  var newMess = Mess(req.body).save(function (err, data) {
    if(err) throw err;
    res.json(data);
  });
  console.log(req.body);
});
app.delete('/:item',function (req,res) {
  Mess.find({item: req.params.item.replace(/\-/g, " ")}).remove(function (err, data) {
    if(err) throw err;
    res.json(data);
  });

});
};
