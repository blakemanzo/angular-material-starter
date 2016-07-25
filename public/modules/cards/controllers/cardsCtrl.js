angular.module('cardsCtrl', ['cardsService'])
.controller('cardsCtrl', function(Cards) {
	
	self = this;

	self.cardItems = Cards.all();

});