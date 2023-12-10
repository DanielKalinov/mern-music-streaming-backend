import mongoose, { Schema } from 'mongoose';

const ObjectId = Schema.Types.ObjectId;

const albumSchema = new Schema({
	name: String,
	duration: String,
	year: Number,
	artist: { type: ObjectId, ref: 'artist' },
	albumImageUrl: String,
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

const Album = mongoose.model('album', albumSchema);

export default Album;
