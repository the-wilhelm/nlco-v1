angular.module('nlco.tiles', [])

.factory('Tabs', function(){
	return{
		links:function(typeID){
			console.log(typeID);
			
			return typeID;
		}
	}
})

.factory('Tiles', function ($http){	
	
	return{
		all: function(typeID, sortID){
			var event_tiles = [];
			var json_link = '';
			var counter = 0;
			
			switch(typeID){
				case 'featured':
					json_link = 'http://nightlifeco.com/tiles.json';
					break;
				
				case 'bars':
					json_link = 'http://nightlifeco.com/bar-venues.json';
					break;
				
				case 'dining':
					json_link = 'http://nightlifeco.com/bar-venues.json';
					break;
				
				case 'galleries':
					json_link = 'http://nightlifeco.com/galleries/tiles.json';
					break;
				
				case 'contact':
					json_link = 'http://nightlifeco.com/contact.json';
					break;
			}
			
			
			
			$http.get(json_link).success(function(data){
				var tiles = angular.fromJson(data);

				for(var i= 0; i<tiles.length; i++){
					if(tiles[i]['type'] == sortID){
						console.log(tiles[i]['type']);
						
						tiles[i]['page_id'] = counter;
						event_tiles.push(tiles[i]);

						counter++;
					}
				}
		    });
			
			return event_tiles;
		},
		get: function(typeID, eventID){
			return event_tiles[eventID];
		}
	}
})

.factory('GalleryTiles', function ($http){
	var gallery_tiles = [];
	var counter = 0;
	
    $http.get('http://nightlifeco.com/tiles.json').success(function(data){
		var tiles = angular.fromJson(data);
		
		for(var i= 0; i<tiles.length; i++){
			if(tiles[i]['type'] == 'gallery'){
				tiles[i]['page_id'] = counter;
				gallery_tiles.push(tiles[i]);
				
				counter++;
			}
		}
    });

	return{
		get: function(galleryID){
			return gallery_tiles[galleryID];
		}
	}
});