angular.module('basketballApp', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // hide accessory bar by default.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html'
  })

  .state('app', {
    url: '/app',
    templateUrl: '/app/layout/menu-layout.html'
  });

  // use this if none of the above are matched
  $urlRouterProvider.otherwise('/app');
});
