angular.module('app.controllers', [])

  
.controller('playlistCtrl', function($scope, SharedData) {	
	$scope.SharedData = SharedData;
})
      
.controller('searchCtrl', ['$scope', '$http', 'SharedData', function($scope, $http, SharedData) {		
	$scope.SharedData = SharedData;
	$scope.SharedData.searchSongList = [];
	$scope.SharedData.songList = [];
	
	$scope.searchSongs = function(query){		
		$scope.SharedData.searchSongList = [];
		$http.jsonp('http://api.deezer.com/search?callback=JSON_CALLBACK&output=jsonp&q='+query).
		  success(function(dataResult, status, headers, config) {
		    data = dataResult.data;		    
		    for(i=0;i<data.length;i++){
		    	$scope.SharedData.searchSongList.push({		    		
		    		name		: data[i].title,
		    		artist		: data[i].artist.name,
		    		thumb 		: data[i].album.cover_medium,
		    		votes 		: 1,
		    		playerid	: data[i].id,		    		
		    	});
		    }		    		   		    
		  }).
		  error(function(data, status, headers, config) {
		    	console.log("Error: "+status);
		  });		  
	};

	$scope.addSong = function(song){
		$scope.SharedData.songList.push(song);
	}

}])
   
.controller('aboutCtrl', function($scope) {

})
 