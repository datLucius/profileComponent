var h = require('hyperscript')

exports.url = '/profiles/new'
exports.template = render().outerHTML
exports.controller = [
  '$scope',
  'messages',
  '$state',
  component
]


function component ($scope, messages, $state) {
  $scope.create = function (profile) {
      var user = {
        firstName : profile.firstName,
        lastName : profile.lastName,
        email : profile.email,
        phone : profile.phone,
        avatar : profile.avatar
      };
      console.log(user);
    };
  }

function render () {
    return h('.container', [
      h('h3', 'New Profile'),
      h('form', {
        'data-ng-submit': 'create(profile)'
      }, [
        h('.form-group', [
          h('labels.sr-only', 'Picture'),
          h('input.form-control', {
            type: 'file',
            'data-ng-model': 'profile.avatar',
            placeholder: 'avatar'
          })
        ]),
        h('.form-group', [
          h('labels.sr-only', 'First Name'),
          h('input.form-control', {
            type: 'text',
            'data-ng-model': 'profile.firstName',
            placeholder: 'first name'
          })
        ]),
        h('.form-group', [
          h('labels.sr-only', 'Last Name'),
          h('input.form-control', {
            type: 'text',
            'data-ng-model': 'profile.lastName',
            placeholder: 'last name'
          })
        ]),
        h('.form-group', [
          h('labels.sr-only', 'email'),
          h('input.form-control', {
            type: 'text',
            'data-ng-model': 'profile.email',
            placeholder: 'email'
          })
        ]),
        h('.form-group', [
          h('labels.sr-only', 'phone'),
          h('input.form-control', {
            type: 'text',
            'data-ng-model': 'profile.phone',
            placeholder: 'phone number'
          })
        ]),
        h('.form-group', [
          h('button.btn.btn-primary',
          'Create Profile'),
          h('a.btn.btn-warning', {
            'data-ui-sref': 'home',
            style: {
              'margin-left': '5px'
            }
          }, 'Cancel')
        ])
      ])
    ]);
}
