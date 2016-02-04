Template.index.onCreated( function() {
  this.currentTab = new ReactiveVar( "type" );
});

Template.index.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();

    var data = {
      "type": function(){
      		return Type.find();
      },
      "milk": function(){
      		return Milk.find();
      },
      "extras": function(){
      		return Extras.find();
      }
    };

    return { contentType: tab, items: data[ tab ] };
  }
});

Template.index.events({
  'click .nav-tabs li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-tabs li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );
  }
});