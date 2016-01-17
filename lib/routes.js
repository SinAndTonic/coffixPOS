Router.configure({
	layoutTemplate: 'layout'
});

// Router.route('/', function () {
//   this.render('newOrder');
// });

Router.route('/all-orders', {name: 'allOrders'});

Router.route( '/', {name: 'newOrder'});

Router.route( '/modify', {name: 'modify'});

Router.route( '/modify/type', {name: 'modType'});