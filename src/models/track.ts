import mongoose, { Schema } from 'mongoose';

const trackSchema = new Schema({
	title: String,
	artist: { type: Schema.Types.ObjectId, ref: 'artist' },
});

const Track = mongoose.model('track', trackSchema);

export default Track;
