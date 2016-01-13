Template.newOrder.helpers({
	size: function(){
		return [
			{label: "Large", value: 3.50},
			{label: "Small", value: 2.50}
		];
	},
	type: function(){
		return [
			{label: "Espresso", value: "Espresso"},
			{label: "Unichem Lynnmall", value: "Unichem Lynnmall"}
		];
	},
	milk: function(){
		return [
			{label: "Soy", value: "Soy"},
			{label: "Unichem Lynnmall", value: "Unichem Lynnmall"}
		];
	},
	extras: function(){
		return [
			{label: "Hazlenut Syrup", value: "Hazlenut Syrup"},
			{label: "Unichem Lynnmall", value: "Unichem Lynnmall"}
		];
	}
});

Template.currentOrder.helpers({
	currentO: function(){
		return Orders.find();
	},
	totalPrice: function(){
		var sum = 0; 
  		Orders.find({}).forEach(function (doc) { sum += doc.price; });
  		return accounting.formatMoney(sum, "$");
	},
	prices: function(){
		amount = this.price;
		return accounting.formatMoney(amount, "$");
	}
});

Template.currentOrder.events({
	'click .remove' : function(e){
		Orders.remove(this._id);
	}
});