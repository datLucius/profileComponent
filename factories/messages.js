module.exports = function ($http) {
  return {
    list: function () {
      return $http.get('/api/profiles');
    },
    create: function (profile) {
      return $http.post('/api/profiles', profile);
    }
  };
}
