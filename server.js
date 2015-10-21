//express
var http = require('http');
var HttpHashRouter = require('http-hash-router');
var ecstatic = require('ecstatic');

//light weight router, like express//
var router = HttpHashRouter();

var jsonBody = require('body/json');
var sendJSON = require('send-data/json');

var profiles = [{
  name: 'profile1',
  unread: 2
}]

router.set('/api/profiles', {
  GET: function (req, res) {
    sendJSON(req, res, profiles);
  },
  POST: function (req, res) {
    jsonBody(req, res, function (err, body) {
      profiles.push(body)
      sendJSON(req, res, {ok: true});
    })
  }
});
router.set('/', function (req, res) {
  req.url = '/index.html';
  ecstatic('www')(req, res);
});

router.set('/*', ecstatic('www'));

var server = http.createServer(function (req, res){
  router(req, res, {}, onError);

  function onError (err){
    res.end('ERROR');
    console.log(err);
  }
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Server listening on ' + port);
console.log('press CTRL-C to stop server');
