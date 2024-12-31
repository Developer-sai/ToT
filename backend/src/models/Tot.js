import mongoose from 'mongoose';

const TotSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    this: {
      text: String,
      media: String
    },
    that: {
      text: String,
      media: String
    }
  },
  votes: {
    this: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    that: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  comments: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
    createdAt: { type: Date, default: Date.now }
  }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Tot', TotSchema);

