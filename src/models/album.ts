import mongoose, { Schema } from 'mongoose';

const albumSchema = new Schema({
	name: String,
	duration: String,
	year: Number,
	artist: { type: Schema.Types.ObjectId, ref: 'artist' },
	tracks: [{ type: Schema.Types.ObjectId, ref: 'track' }],
});

const Album = mongoose.model('album', albumSchema);

export default Album;
