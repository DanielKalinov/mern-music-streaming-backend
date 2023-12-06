import mongoose, { Schema } from 'mongoose';

const artistSchema = new Schema({
	name: String,
	bio: String,
	artistImageUrl: String,
	artistBioImageUrl: String,
	albums: [
		{
			type: Schema.Types.ObjectId,
			ref: 'album',
		},
	],
	topTracks: [
		{
			type: Schema.Types.ObjectId,
			ref: 'track',
		},
	],
});

const Artist = mongoose.model('artist', artistSchema);

export default Artist;
