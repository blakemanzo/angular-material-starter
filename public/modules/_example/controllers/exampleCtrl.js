angular.module('exampleCtrl', ['exampleService'])
.controller('exampleCtrl', function(Example) {
	
	self = this;

	self.exampleItems = Example.all();

});