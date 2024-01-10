import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const albumSchema = new Schema(
	{
		name: String,
		duration: String,
		year: Number,
		artist: [{ type: ObjectId, ref: 'artist' }],
		albumImageUrl: String,
		tracks: [{ _id: ObjectId, track: { type: ObjectId, ref: 'track' } }],
	},
	{ versionKey: false }
);

const Album = mongoose.model('album', albumSchema);

export default Album;
