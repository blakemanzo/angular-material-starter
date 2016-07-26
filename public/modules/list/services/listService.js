angular.module('listService', [])
.factory('List', function($http) {
	
	var listFactory = {};

	// Replicate $http request returning JSON
	listFactory.all = function() {

		return $http.get('./modules/list/services/list.json');

	};

	return listFactory;

});