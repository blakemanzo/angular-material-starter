angular.module('cardsService', [])
.factory('Cards', function($http) {
	
	var cardsFactory = {};

	cardsFactory.all = function() {
		//return $http.get(API.URL/cards);
		return {
			"list":[
				{
				"id":"1",
				"image":"./temp-assets/card-material.png",
				"title":"Material Design",
				"link":"http://material.google.com"
				},
				{
				"id":"2",
				"image":"./temp-assets/card-angular-material.png",
				"title":"Material Angular",
				"link":"http://material.angularjs.org"
				},
				{
				"id":"3",
				"image":"./temp-assets/card-materialup.png",
				"title":"MaterialUp",
				"link":"http://www.materialup.com"
				}
			]
			};
	};

	return cardsFactory;

});