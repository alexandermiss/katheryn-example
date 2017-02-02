var Katheryn = require('./katheryn'),
Settings = require('./kath/settings');

Katheryn(Settings).then(function(){
  console.log('katheryn starting...');
}).catch(function (e){
  console.log('Error...');
});
