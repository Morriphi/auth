var http = require('http');
var fs = require('fs');

http.get('http://lone15-bus01v.int-tst.ttl.local/CustomerService/AuthenticationService.svc?wsdl', function(content){
  var stream = fs.createWriteStream('wdsl.wsdl');
  content.pipe(stream);
});
