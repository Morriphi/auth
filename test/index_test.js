var expect = require('chai').expect;
var soap = require('soap');
var douche = require('douche');

//describe('auth', function(){
  //it('auths', function(done){

    var url = 'http://lone15-bus01v.int-tst.ttl.local/CustomerService/AuthenticationService.svc?wsdl';


    //var client = new douche(url);
    //client.wsdl.parse(function(wsdl){
    //  console.log(wsdl);
    //});

    var creds = {
      'Credentials': {
        'EntryParameter': {},
        'EmailAddress': 'philip.morris@thetrainline.com',
        'Password': 'password',
        'IsVerified': true
      },
      'ContactId': 123
    };

   soap.createClient(url, function(err, client){
     if(err) console.log(err.message);

for(var prop in client.AuthenticationService.BasicHttpBinding_IAuthenticationService){
  if(client.AuthenticationService.BasicHttpBinding_IAuthenticationService.hasOwnProperty(prop))
    console.log(prop);
}
var service = new client.AuthenticationService();
console.log(service);
console.log(client.AuthenticationService);

    client.AuthenticationService.Login(creds, function(err, result) {
      console.log(result);
      done();
    }, {timeout: 1000});

    }, {timeout: 1000});
  //});
//});
