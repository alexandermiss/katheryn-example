var Katheryn = require('katheryn'),
    Settings = require('./kath/settings'),
    App,
    Katheryn;

// Katheryn = Promise.resolve(App);

Katheryn(Settings).then(function(){
  console.log('katheryn starting...');
  process.exit(0);
}).catch(function (e){
  console.log('Error...');
});
