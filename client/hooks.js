AutoForm.hooks({
  newOrderForm: {
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

