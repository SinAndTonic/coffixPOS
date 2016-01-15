Template.registerHelper("prettyDate", function(dateIn) {
    return moment(dateIn).format('Do MMM YYYY, h:mm:ss a');
});