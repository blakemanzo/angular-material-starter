angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards) {
	
	self = this;
	
	// Grab all the items from Cards Service
	Cards.all()
    .success(function(data) {
        console.log(data);
        self.cardItems = data;
    })
    .error(function(data) {
        // Error Handling
    });

});