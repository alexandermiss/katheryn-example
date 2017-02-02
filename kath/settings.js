var path = require('path');

var Settings = {

  BASEDIR : __dirname,

  TEMPLATE: __dirname + '/templates',

  DATABASE: {
    url : "mongodb://localhost:27017/mama"
  },

  INSTALLED_APPS: [
    'main'
  ]

};

module.exports = Settings;
