angular.module('nlco.controllers', [])

.controller('TabsCtrl', function($scope, $stateParams, Tabs) {
  // "Pets" is a service returning mock data (services.js)

  $scope.tiles = Tabs.links($stateParams.typeID, $stateParams.sortID);
})

// A simple controller that fetches a list of data from a service
.controller('EventTileCtrl', function($scope, $stateParams, Tiles) {
  	// "Pets" is a service returning mock data (services.js)
  	$scope.tiles = Tiles.all($stateParams.typeID, 'event');
	
	$scope.leftButtons= [
		{
			type: 'button-nav',
			content: '<i class="icon ion-navicon"></i>',
			tap: function(e){
				$scope.sideMenuController.toggleLeft();
			}
		}
	];
})

.controller('ArticleTileCtrl', function($scope, $stateParams, Tiles) {
  // "Pets" is a service returning mock data (services.js)
  $scope.tiles = Tiles.all($stateParams.typeID, 'article');	
	
	$scope.leftButtons= [
		{
			type: 'button-nav',
			content: '<i class="icon ion-navicon"></i>',
			tap: function(e){
				$scope.sideMenuController.toggleLeft();
			}
		}
	];
})

.controller('GalleryTileCtrl', function($scope, $stateParams, Tiles) {
  // "Pets" is a service returning mock data (services.js)
  $scope.tiles = Tiles.all($stateParams.typeID, 'gallery');	
	
	$scope.leftButtons= [
		{
			type: 'button-nav',
			content: '<i class="icon ion-navicon"></i>',
			tap: function(e){
				$scope.sideMenuController.toggleLeft();
			}
		}
	];
})


// A simple controller that shows a tapped item's data
.controller('EventDetailCtrl', function($scope, $stateParams, EventTiles) {
  // "Pets" is a service returning mock data (services.js)
  $scope.tile = Tiles.get($stateParams.typeID, 'events', $stateParams.eventID);
})

.controller('ArticleDetailCtrl', function($scope, $stateParams, EventTiles) {
  // "Pets" is a service returning mock data (services.js)
  $scope.tile = Tiles.get($stateParams.typeID, 'articles', $stateParams.eventID);
})

// A simple controller that shows a tapped item's data
.controller('GalleryCtrl', function($scope, $stateParams, GalleryTiles) {
  // "Pets" is a service returning mock data (services.js)
  $scope.tile = GalleryTiles.get($stateParams.galleryID);
});
