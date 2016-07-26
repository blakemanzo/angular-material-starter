angular.module('tabsService', [])
.factory('Tabs', function($http) {
	
	var tabsFactory = {};

	// Replicate $http request returning JSON
	tabsFactory.all = function() {

		return $http.get('./modules/tabs/services/tabs.json');

	};

	return tabsFactory;

});