angular.module('tabsCtrl', ['tabsService'])
.controller('tabsCtrl', function(Tabs) {
	
	self = this;

	// Grab all the items from Tabs Service
	Tabs.all()
    .success(function(data) {
        self.tabItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});