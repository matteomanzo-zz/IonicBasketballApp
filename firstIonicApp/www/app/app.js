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
    abstract: true,
    url: '/home',
    templateUrl: 'app/home/home.html'
  })

  .state('home.leagues', {
    url: '/leagues',
    views: {
      'tab-leagues': {
        templateUrl: 'app/home/leagues.html'
      }
    }
  })

  .state('home.myteams', {
    url: '/myteams',
    views: {
      'tab-myteams': {
        templateUrl: 'app/home/myteams.html'
      }
    }
  })

  .state('app', {
    abstract: true,
    url: '/app',
    templateUrl: '/app/layout/menu-layout.html'
  })

  .state('app.teams', {
    url: '/teams',
    views: {
      'mainContent': {
        templateUrl: 'app/teams/teams.html'
      }
    }
  })

  .state('app.team-details', {
    url: '/teams/:id',
    views: {
      'mainContent': {
        templateUrl: 'app/teams/team-details.html'
      }
    }
  })

  .state('app.locations', {
    url: '/locations',
    views: {
      'mainContent': {
        templateUrl: 'app/locations/locations.html'
      }
    }
  })

  // use this if none of the above are matched
  $urlRouterProvider.otherwise('/app/teams');
});
