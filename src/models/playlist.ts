import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const playlistSchema = new Schema(
  {
    name: String,
    description: String,
    imageUrl: String,
    tracks: [{ _id: ObjectId, track: { type: ObjectId, ref: 'track' } }],
  },
  { versionKey: false }
);

const Playlist = mongoose.model('playlist', playlistSchema);

export default Playlist;
