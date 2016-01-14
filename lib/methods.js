if ( Meteor.isServer ) {

Meteor.methods({
  updateAll: function(){
    Orders.update({},{$set:{'complete':true}},{multi:true});
  },
  incrementId: function(){
  		setCounter('orderId', 0);
  	  	return incrementCounter('orderId',1);
  }
});
}

if ( Meteor.isClient ) {
Ground.methodResume([
      'updateAll'
  ]);
}