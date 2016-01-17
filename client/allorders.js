Template.allOrders.helpers({
	orders: function(){
		return Orders.find({completed: true},{sort: {createdAt: -1}});
	}
});