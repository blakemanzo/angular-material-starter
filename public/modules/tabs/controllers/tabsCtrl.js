angular.module('tabsCtrl', ['tabsService'])
.controller('tabsCtrl', function(Tabs) {
	
	self = this;

	self.tabItems = Tabs.all();

});