Template.modify.helpers({
  temp: function() {

    return "modType";
  }
});

Template.modify.events({
  
  'click .tab': function(e) {
    // current = e.currentTarget.name;
    // //console.log(current);
    // Session.set("selectedTab", e);
    // console.log(Session.get("selectedTab"));
    //console.log(e);
  }

});

Template.modType.helpers({
  autoSaveMode: function () {
    return Session.get("autoSaveMode") ? true : false;
  },
  selectedPersonDoc: function () {
    
    return Type.findOne(Session.get("selectedPersonId"));
  },
  isSelectedPerson: function () {
    return Session.equals("selectedPersonId", this._id);
  },
  formType: function () {
    if (Session.get("selectedPersonId")) {
      return "update";
    } else {
      return "disabled";
    }
  },
  disableButtons: function () {
    return !Session.get("selectedPersonId");
  },
  allTypes: function() {
    return Type.find();
    
    
  },
  selected: function(){
    if (this._id === Session.get('selectedPersonId'))
      return "selected";
  }
});

Template.modType.events({
  'click .itemRow': function () {
    Session.set("selectedPersonId", this._id);
  },
  'change .autosave-toggle': function () {
    Session.set("autoSaveMode", !Session.get("autoSaveMode"));
  },
  'click .remove': function(e) {
    toRemove = Session.get("selectedPersonId");
    Type.remove(toRemove);
  },
  'click .addNew': function(e) {
    Type.insert({
      name: "New Item"
    });
  }
});