import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const songSchema = new Schema({
	title: String,
	artist: String,
	audioUrl: String,
});

const Song = mongoose.model('Song', songSchema);

export default Song;
