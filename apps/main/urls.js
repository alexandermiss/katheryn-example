var url = require('./katheryn/core/urlresolvers'),
    view = require('./view')
;

url('/', view.MainView.index, {name: 'mainview'});
