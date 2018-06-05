'use strict';

import mongoose from 'mongoose';

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  recipe: {
    type: String,
    minlength: 10,
  },
  // difficulty: {
  //   type: Number,
  //   maxValue: 5,
  // },
  timestamp: {
    type: Date,
    default: () => new Date(),
  },
});

export default mongoose.model('food', foodSchema);
