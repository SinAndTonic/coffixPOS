AutoForm.hooks({
  newOrderForm: {

    onSubmit: function (insertDoc, updateDoc, currentDoc) {
            insertDoc.multi = Session.get('multi');
            Orders.insert(insertDoc);
            this.done();
            console.log('submited');
            return false;
        },
  	onSuccess: function(formType, result) {
  		$( "label" ).removeClass( "active" );
  		Session.set('multi', 1);


  	},
  	before: {
  		insert: function(doc) {
  			doc.multi = Session.get('multi');
  			return doc;
  		}
  	}
  }
});

