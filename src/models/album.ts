import mongoose, { Schema } from 'mongoose';
import trackSchema from './track';

const ObjectId = Schema.Types.ObjectId;

const albumSchema = new Schema(
	{
		name: String,
		duration: String,
		year: Number,
		artist: { type: ObjectId, ref: 'artist' },
		albumImageUrl: String,
		tracks: [trackSchema],
	},
	{ versionKey: false }
);

const Album = mongoose.model('album', albumSchema);

export default Album;
