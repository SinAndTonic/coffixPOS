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
			{label: "Long Black", value: "Long Black"}
		];
	},
	milk: function(){
		return [
			{label: "Regular", value: "Regular"},
			{label: "Soy", value: "Soy"}
		];
	},
	extras: function(){
		return [
			{label: "Hazlenut", value: "Hazlenut"},
			{label: "Sugar x 1", value: "Sugar x 1"}
		];
	},
	multiQty: function(){
		return Session.get('multi');
	}
});

Template.newOrder.events({
	'click .btn': function(e){
		
			if (this.name === 'type')
			{
				if ($(e.target).hasClass('active'))
				{
					
					multi = Session.get('multi');
					multi += 1;
					Session.set('multi', multi);
					
				}
				else {
					Session.set('multi',1);
					}
				}
	}
	
});

Template.currentOrder.helpers({
	currentO: function(){
		return Orders.find({completed: false});
	},
	totalPrice: function(){
		var sum = 0; 
  		Orders.find({complete: false}).forEach(function (doc) { sum += doc.price; });
  		Session.set('totalPrice', sum);
  		return accounting.formatMoney(sum, "$");
	},
	prices: function(){
		amount = this.price;
		return accounting.formatMoney(amount, "$");
	},
	amountPaid: function(){
		paid = Session.get('paid');
		return accounting.formatMoney(paid, "$");
	},
	difference :function(){
		amount = Session.get('totalPrice');
		paid = Session.get('paid');
		diff = amount - paid;
		return accounting.formatMoney(diff, "$");
	},
	complete: function(){
		if (Session.get('paid') >= Session.get('totalPrice') && Session.get('paid') !== 0)
			{return true;}
	},
	remaining: function(){
		if (Session.get('paid') >= Session.get('totalPrice'))
			{return 'Change';}
		else
			{return 'Remaining';}
	}
});

Template.currentOrder.events({
	'click .remove' : function(e){
		Orders.remove(this._id);
	},
	'click .complete' : function(e){
		Session.set('paid',0);
		// Meteor.call('incrementId', function(error,result){
		// 	if (error)
		// 		{console.log(error);}
		// 	else
		// 		{console.log(result);}
		// });
		
		Meteor.call('updateAll');
		
	}
});

Template.pay.events({
	'click .pay' :function(e){
		clicked = parseFloat(e.target.value, 10);
		console.log(clicked);
		paid = parseFloat(Session.get('paid'));

		Session.set('paid', paid + clicked);
	}
});