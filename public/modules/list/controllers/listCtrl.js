angular.module('listCtrl', ['listService'])
.controller('listCtrl', function(List) {
	
	self = this;

	self.listItems = List.all();

});