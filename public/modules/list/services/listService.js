angular.module('listService', [])
.factory('List', function($http) {
	
	var listFactory = {};

	listFactory.all = function() {
		//return $http.get(API.URL/list);
		return {
			"id": 3,
			"list":[
				{
				"id":"1",
				"image":"./temp-assets/list-material.png",
				"title":"Material Design",
				"link":"http://material.google.com"
				},
				{
				"id":"2",
				"image":"./temp-assets/list-angular-material.png",
				"title":"Material Angular",
				"link":"http://material.angularjs.org"
				},
				{
				"id":"3",
				"image":"./temp-assets/list-materialup.png",
				"title":"MaterialUp",
				"link":"http://www.materialup.com"
				}
			]
			};
	};

	return listFactory;

});