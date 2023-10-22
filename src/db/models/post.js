// // models/Post.ts
// import mongoose, { Document, Schema } from 'mongoose';

// export interface IPost extends Document {
//   title: string;
//   content: string;
//   created_at: Date;
//   updated_at: Date;
//   category_id: string;
// }

// const PostSchema = new Schema<IPost>({
//   title: { type: String, required: true },
//   content: { type: String, required: true },
//   created_at: { type: Date, default: Date.now },
//   updated_at: { type: Date, default: Date.now },
//   category_id: { type: String, required: true },
// });

// export default mongoose.model<IPost>('Post', PostSchema);

const mongoose = require('mongoose');

const { v4: uuidv4 } = require('uuid');

const PostSchema = new mongoose.Schema({
  id: {
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
