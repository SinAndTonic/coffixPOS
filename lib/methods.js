Meteor.methods({
  updateAll: function(){
    Orders.update({},{$set:{'complete':true}},{multi:true});
  }
});

if ( Meteor.isClient ) {
Ground.methodResume([
      'updateAll'
  ]);
}