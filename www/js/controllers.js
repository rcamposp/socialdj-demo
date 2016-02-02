angular.module('app.controllers', [])

  
.controller('playlistCtrl', ['$scope', 'SharedData', '$firebaseArray', '$firebaseObject', function($scope, SharedData, $firebaseArray, $firebaseObject) {	
	$scope.SharedData = SharedData;
	var ref = new Firebase("https://socialdj-demo.firebaseio.com/songList");
	$scope.SharedData.songList = $firebaseArray(ref);	

	$scope.deleteSong = function(song){				
		item = $scope.SharedData.songList.$getRecord(song.$id);		
		$scope.SharedData.songList.$remove(item).then(function(ref) {
		  console.log("Song deleted");
		});
	}
}])
      
.controller('searchCtrl', ['$scope', '$http', 'SharedData', '$firebaseArray', '$firebaseObject',  function($scope, $http, SharedData, $firebaseArray, $firebaseObject) {		
	$scope.SharedData = SharedData;
	$scope.SharedData.searchSongList = [];		

	var ref = new Firebase("https://socialdj-demo.firebaseio.com/songList");
	$scope.SharedData.songList = $firebaseArray(ref);
	
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
		    		playerid	: data[i].id,		    		
		    	});
		    }		    		   		    
		  }).
		  error(function(data, status, headers, config) {
		    	console.log("Error: "+status);
		  });		  
	};

	$scope.addSong = function(song){
    	$scope.SharedData.songList.$add(song);
    	console.log("Song added");	        									  				        
	}	

}])
   
.controller('aboutCtrl', function($scope) {

})
 