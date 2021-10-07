const mongoose = require('mongoose');


const brandSchema = new mongoose.Schema({

   name: {
      type: String,
      required: true
   },
   isDeleted: {
      type: Boolean,
      default: false
   },
   cuisineId: {
      type: mongoose.Schema.Types.ObjectId, ref: 'Cuisine'
   }
}, {
   timestamps: true
});


module.exports = mongoose.model('Brand', brandSchema);