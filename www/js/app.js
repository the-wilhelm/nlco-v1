// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('nlco', ['ionic', 'nlco.tiles', 'nlco.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
	
    .state('type', {
      url: "/:typeID",
      abstract: true,
      templateUrl: "templates/tabs.html",
      controller: 'TabsCtrl'
    })

    // the pet tab has its own child nav-view and history
    .state('type.events', {
      url: '/events',
      views: {
        'events-tab': {
          templateUrl: 'templates/tiles.html',
          controller: 'EventTileCtrl'
        }
      }
    })

    .state('type.event-detail', {
      url: '/events/:eventID',
      views: {
        'events-tab': {
          templateUrl: 'templates/event.html',
          controller: 'EventDetailCtrl'
        }
      }
    })

	.state('type.articles', {
      url: '/articles',
      views: {
        'articles-tab': {
          templateUrl: 'templates/tiles.html',
          controller: 'ArticleTileCtrl'
        }
      }
    })

    .state('type.article-detail', {
      url: '/articles/:eventID',
      views: {
        'articles-tab': {
          templateUrl: 'templates/event.html',
          controller: 'ArticleDetailCtrl'
        }
      }
    })

	.state('type.galleries', {
      url: '/galleries',
      views: {
        'galleries-tab': {
          templateUrl: 'templates/tiles.html',
          controller: 'GalleryTileCtrl'
        }
      }
    })

    .state('type.gallery-detail', {
      url: '/galleries/:galleryID',
      views: {
        'galleries-tab': {
          templateUrl: 'templates/event.html',
		  controller: 'GalleryCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/featured/events');

});
