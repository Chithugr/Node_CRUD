const mongoose = require('mongoose');

// const { v4: uuidv4 } = require('uuid');

const PostSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  categoryId: {
    type: String,
    required: true,
  }
},
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Post', PostSchema);
