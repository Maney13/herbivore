herbivoreapp.controller('ctrlHerbivore', function($scope, $http){
 	$scope.foodItems = [
		{id: 1, name: "Chili Chicken Burger", desc: "burgers met verse sla, tomaat, komkommer, rode ui, en sause naar keuze vegan chedar kaas + 0,25", price:3.99, actie: true, sausOpties: [1,3,5]},
		{id: 2, name: "Crispy Chicken Burger", desc: "burgers met verse sla, tomaat, komkommer, rode ui, en sause naar keuze vegan chedar kaas + 0,25", price:3.99, actie: false, sausOpties: [2,4,6]},
		{id: 3, name: "Broodje Hamburger", desc: "burgers met verse sla, tomaat, komkommer, rode ui, en sause naar keuze vegan chedar kaas + 0,25", price:3.99, actie: true, sausOpties: [1,5,2]}
	];
	$scope.sauzen = [];
	$scope.sauzen [1] = {id: 1, name: "Vegan mayo"};
	$scope.sauzen [2] = {id: 2, name: "Vegan Curry"};
	$scope.sauzen [3] = {id: 3, name: "Vegan srirachamayo"};
	$scope.sauzen [4] = {id: 4, name: "Vegan chillisaus"};
	$scope.sauzen [5] = {id: 5, name: "Vegan Knoflooksaus"};
	$scope.sauzen [6] = {id: 6, name: "Vegan Ketchup"};
	
})