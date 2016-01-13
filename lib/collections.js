Orders = new Mongo.Collection("orders");

Orders.attachSchema(new SimpleSchema({
  
  price: {
    type: Number,
    label: " ",
    decimal: true
  },
  type: {
    type: String,
    label: " "
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
  complete: {
    type: Boolean,
    defaultValue: false
  }
}));