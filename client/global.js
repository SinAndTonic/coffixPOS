Template.registerHelper("prettyDate", function(dateIn) {
    return moment(dateIn).format('Do MMM YYYY, h:mm:ss a');
});

Template.registerHelper("getStatus", function() {
	status = Meteor.status().status;
	return status;
});