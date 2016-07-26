angular.module('cardsService', [])
.factory('Cards', function($http) {
	
	var cardsFactory = {};

	// Replicate $http request returning JSON
	cardsFactory.all = function() {

		return $http.get('./modules/cards/services/cards.json');

	};

	return cardsFactory;

});