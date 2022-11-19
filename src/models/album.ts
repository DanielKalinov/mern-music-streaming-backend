import mongoose from 'mongoose';

interface IAlbum {
	name: string;
	artist: string;
	songs: {
		title: string;
		artist: string;
		albumImageUrl: string;
		audioUrl: string;
	}[];
	albumImageUrl: string;
	year: string;
}

const albumSchema = new mongoose.Schema<IAlbum>({
	artist: String,
	name: String,
	songs: [
		{
			title: String,
			artist: String,
			albumImageUrl: String,
			audioUrl: String,
		},
	],
	albumImageUrl: String,
	year: String,
});

const Album = mongoose.model<IAlbum>('Album', albumSchema);

export default Album;
