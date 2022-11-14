import mongoose from 'mongoose';

interface ISong {
	title: string;
	artist: string;
	audioUrl: string;
}

const songSchema = new mongoose.Schema<ISong>({
	title: String,
	artist: String,
	audioUrl: String,
});

const Song = mongoose.model<ISong>('Song', songSchema);

export default Song;
