import mongoose, { Schema } from 'mongoose';

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
	tracks: [
		{
			id: ObjectId,
			audioUrl: String,
			artist: { type: ObjectId, ref: 'artist' },
			title: String,
			album: { type: ObjectId, ref: 'album' },
		},
	],
});

const Artist = mongoose.model('artist', artistSchema);

export default Artist;
