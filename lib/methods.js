if ( Meteor.isServer ) {

Meteor.methods({
  updateAll: function(){
    Orders.update({},{$set:{'completed':true}},{multi:true});

  },
  incrementId: function(){
  		setCounter('orderId', 0);
  	  	return incrementCounter('orderId',1);
  }
});
}

// if ( Meteor.isClient ) {
// Meteor.startup(function() {
//   if ( Meteor.isClient ) {
//     Ground.methodResume([
//       '/' + self.name + '/insert',
//       '/' + self.name + '/remove',
//       '/' + self.name + '/update',
//       'updateAll'
//     ]);
//   }
// });
// }