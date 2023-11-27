import mongoose, { Schema } from 'mongoose';

const trackSchema = new Schema({
	title: String,
	audioUrl: String,
	album: {
		type: Schema.Types.ObjectId,
		ref: 'album',
	},
});

const Track = mongoose.model('track', trackSchema);

export default Track;
