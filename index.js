var Katheryn = require('katheryn'),
    Settings = require('./kath/settings'),
    Promise = require('bluebird'),
    App,
    Katheryn;

// Katheryn = Promise.resolve(App);

Katheryn(Settings).then(function(server){
  server.init();
  console.log(arguments);
  console.log('katheryn starting...');
}).catch(function (e){
  console.log('Error...');
});
