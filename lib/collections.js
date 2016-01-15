Orders = new Mongo.Collection("orders");

//Ground.Collection(Orders);



Counter = new Mongo.Collection("counter");

Orders.attachSchema(new SimpleSchema({
  orderId: {
    type: Number,
    optional: true
  },
  price: {
    type: Number,
    label: " ",
    decimal: true
  },
  type: {
    type: String,
    label: " "
  },
  multi: {
    type: Number,
    label: " ",
    optional: true
  },
  milk: {
    type: String,
    label: " "
  },
  extras: {
    type: [String],
    label: " ",
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();
      }
    }
  },
  completed: {
    type: Boolean,
    defaultValue: false
  }
}));

Type = new Mongo.Collection('type');

Type.attachSchema(new SimpleSchema({
  name: {
    type: String
  }
}));

if ( Meteor.isClient ) {
Ground.methodResume([
      'updateAll'
  ]);
}

OrdersG = new Ground.Collection(Orders);