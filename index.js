var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.all('/*', function(req, res, next) {
    res.sendFile('index.html', { root: __dirname + '/public' });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

