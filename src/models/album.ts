import mongoose from 'mongoose';

interface IAlbum {
	name: string;
	artist: string;
	songs: {
		title: string;
		audioUrl: string;
	}[];
	albumImageUrl: string;
}

const albumSchema = new mongoose.Schema<IAlbum>({
	artist: String,
	name: String,
	songs: [
		{
			title: String,
			audioUrl: String,
		},
	],
	albumImageUrl: String,
});

const Album = mongoose.model<IAlbum>('Album', albumSchema);

export default Album;