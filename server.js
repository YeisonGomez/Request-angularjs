var express = require('express');
var server = express();

server.use('/', express.static(__dirname+'/public'));


server.listen(8080, function(){
  console.log('El servidor esta corriendo en el puerto:  ', this.address().port);
});
