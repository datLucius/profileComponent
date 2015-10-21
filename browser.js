var h = require('hyperscript');

document.head.appendChild(
  h('link', {
    rel: 'stylesheet',
    href: '//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css'
  })
);

document.body.appendChild(
  h('div', {'data-ui-view': ''}),
  h('div', {'id': 'example'})
);

//ANGULAR COMPONENTS //

var angular = require('angular');

angular.module('app', [
  require('angular-ui-router')
])
.config([
  '$urlRouterProvider',
  '$stateProvider',
  require('./ngconfig')
])
.factory('messages', require('./factories/messages'));

angular.element(document).ready(function(){
  angular.bootstrap(document, ['app']);
});

// //REACT COMPONENTS //
// var ListItem = require('./components/profileForm.jsx');
