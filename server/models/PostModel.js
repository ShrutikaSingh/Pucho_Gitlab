const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

  type: {
      type: String,
      required: true
  },

  short_description:{
    type: String,
    required: true
  },

  long_description: {
      type: String,
      required: true
  },

  user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
  },

  category: {
      type: Schema.Types.ObjectId,
      ref: 'category'
  },

  file: {
      type: String,
      default: ''
  }


});

module.exports = {Post: mongoose.model('post', PostSchema )};
