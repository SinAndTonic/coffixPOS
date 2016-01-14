if ( Meteor.isServer ) {

Meteor.methods({
  updateAll: function(){
    Orders.update({},{$set:{'complete':true}},{multi:true});
  },
  incrementId:function(doc) {
        doc.id = incrementCounter('docId');
        Counter.insert(doc);
        return doc.id;
    }
});
}

if ( Meteor.isClient ) {
Ground.methodResume([
      'updateAll'
  ]);
}