angular.module('listCtrl', ['listService'])
.controller('listCtrl', function(List) {
	
	self = this;

	// Grab all the items from List Service
	List.all()
    .success(function(data) {
        self.listItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});