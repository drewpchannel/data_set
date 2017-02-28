var express = require('express');
var app = express();

var login = require('./routes/login');
var data = require('./routes/data');

app.use('/api/login', login);
app.use('/api/data', data);

if ( app.get('env') === 'production' ) {
    app.use(express.static('./public'));
    app.get('/', function(req,res) {
      res.sendfile('./public/index.html');
    });
}

app.set('port', process.env.PORT || 3000);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
