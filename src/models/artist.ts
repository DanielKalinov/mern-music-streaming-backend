import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const artistSchema = new Schema({
	name: String,
	about: String,
	artistImageUrl: String,
	artistAboutImageUrl: String,
	albums: [
		{
			type: ObjectId,
			ref: 'album',
		},
	],
	tracks: [{ _id: ObjectId, track: { type: ObjectId, ref: 'track' } }],
});

const Artist = mongoose.model('artist', artistSchema);

export default Artist;
