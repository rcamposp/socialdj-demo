angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('menu.playlist', {
      url: '/page1',
      views: {
        'side-menu21': {
          templateUrl: 'templates/playlist.html',
          controller: 'playlistCtrl'
        }
      }
    })
        
      
    
      
    .state('menu', {
      url: '/side-menu21',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('menu.search', {
      url: '/page2',
      views: {
        'side-menu21': {
          templateUrl: 'templates/search.html',
          controller: 'searchCtrl'
        }
      }
    })
        
      
    
      
        
    .state('menu.about', {
      url: '/page3',
      views: {
        'side-menu21': {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/side-menu21/page1');

});