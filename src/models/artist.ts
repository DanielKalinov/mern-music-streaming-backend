import mongoose, { Schema } from 'mongoose';
import trackSchema from './track';

const ObjectId = Schema.Types.ObjectId;

const artistSchema = new Schema({
	name: String,
	bio: String,
	artistImageUrl: String,
	artistBioImageUrl: String,
	albums: [
		{
			type: ObjectId,
			ref: 'album',
		},
	],
	tracks: [trackSchema],
});

const Artist = mongoose.model('artist', artistSchema);

export default Artist;
