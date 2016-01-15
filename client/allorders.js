Template.allOrders.helpers({
	orders: function(){
		return Orders.find({complete: true},{sort: {createdAt: -1}});
	}
});