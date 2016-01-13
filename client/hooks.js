AutoForm.hooks({
  newOrderForm: {
  	onSuccess: function(formType, result) {
  		$( "label" ).removeClass( "active" );

  	}
  }
});

