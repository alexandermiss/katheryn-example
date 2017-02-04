var path = require('path');

var Settings = {

  BASE_DIR : path.resolve(__dirname, '../apps'),

  TEMPLATE_DIR: __dirname + '/templates',

  DATABASE: {
    URL : "mongodb://localhost:27017/mama"
  },

  INSTALLED_APPS: [
    'main'
  ]

};

module.exports = Settings;
