import mongoose, { Schema } from 'mongoose';

const artistSchema = new Schema({
	name: String,
	bio: String,
	artistImageUrl: String,
	albums: [
		{
			type: Schema.Types.ObjectId,
			ref: 'album',
		},
	],
});

const Artist = mongoose.model('artist', artistSchema);

export default Artist;
