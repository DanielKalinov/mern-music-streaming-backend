import mongoose, { Schema, ObjectId } from 'mongoose';

const ObjectId = mongoose.Schema.Types.ObjectId;

const trackSchema = new Schema(
	{
		audioUrl: String,
		artist: [{ type: ObjectId, ref: 'artist' }],
		title: String,
		album: { type: ObjectId, ref: 'album' },
	},
	{ versionKey: false }
);

const Track = mongoose.model('track', trackSchema);

export default Track;
