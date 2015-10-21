var h = require('hyperscript')

exports.url = '/'
exports.template = render().outerHTML
exports.controller = [
  '$scope',
  'messages',
  component
]

function component($scope, messages) {
 messages.list().then(function (result) {
   $scope.profiles = result.data;
 });
}

function render () {
  return h('.container', [
    h('.pull-right', [
      h('button.btn.btn-primary', {
        'data-ui-sref': 'newProfile'
      }, 'New Profile')
    ]),
    h('h3', 'Profiles'),
    h('a.list-group', [
      h('.list-group-item', {
        'data-ng-repeat': 'profile in profiles',
        'data-ui-sref': 'showProfile({id: profile.name})'
      }, [
        h('.pull-right', [
          h('.badge.badge-default', '{{profile.unread}}')
        ]),
        h('h5', '{{profile.name}}')
      ])
    ])
  ]);
}
