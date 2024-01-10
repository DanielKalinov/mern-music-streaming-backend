import mongoose from 'mongoose';
import Album from '../models/album';
import Track from '../models/track';
import Artist from '../models/artist';

const uploadAlbum = () => {
	const artistId = '65761137cd7290801a603822';
	const albumId = new mongoose.Types.ObjectId();

	const albumTracks = [
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FFar%20%26%20Off.mp3?alt=media&token=110fb3d2-083d-4e83-a6f3-bd7526ae17da',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Aerochord (Apsis Edit)',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FDiffraction%20Protocol.mp3?alt=media&token=84330e75-e8c8-4e92-94a8-9777e0ec6c4e',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Coriolis Effect',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FCut.mp3?alt=media&token=8563953a-e138-4c7d-af07-ea1d9363e475',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Amalthea (Innerve Edit)',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FSmall%20Things%20Matter.mp3?alt=media&token=6f50f9bc-be9a-4d03-b508-bb1a9fc823ac',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Hiding In The Clouds',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FAlkaline.mp3?alt=media&token=0af50b30-e9ed-468b-b1a1-0454c5e8127e',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Omrids',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FParenthesis.mp3?alt=media&token=08260785-e7e3-4558-ab25-1d6064931174',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Strommast (Amperes Edit)',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FSulfur.mp3?alt=media&token=ce0ec5c3-2a67-49cb-9c66-a06d95844913',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Terrene Part 1',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FEvenfall.mp3?alt=media&token=6f5ce58c-0765-4ca1-99a6-f738f8894412',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Terrene Part 2',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FThe%20Unexpected%20Hours.mp3?alt=media&token=384109db-4b84-4256-931c-4397523aa4fc',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Finnmark',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FFar%20%26%20Off%2FThe%20Unexpected%20Hours.mp3?alt=media&token=384109db-4b84-4256-931c-4397523aa4fc',
			artist: ['659ed8a374b2bdaaffcf7d15', artistId],
			title: 'Hindmost',
			album: albumId,
		},
	];

	new Album({
		_id: albumId,
		name: 'Terrene',
		duration: '1h 14m',
		year: 2022,
		artist: ['659ed8a374b2bdaaffcf7d15', artistId],
		albumImageUrl:
			'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/album-images%2FAES%20Dana%2FTerrene.jpg?alt=media&token=130cd1bc-10c4-4375-a51b-a671306d68fe',
		tracks: albumTracks.map((item) => ({
			track: { ...item },
			_id: new mongoose.Types.ObjectId(),
		})),
	})
		.save()
		.then(() => {
			console.log('Successfully inserted album.');

			return Track.insertMany(albumTracks);
		})
		.then(() => {
			console.log('Successfully inserted tracks.');

			return Artist.updateOne(
				{ _id: artistId },
				{ $push: { albums: albumId } }
			);
		})
		.then(() => console.log('Successfully updated artist.'))
		.catch((err) => console.log(err));
};

export default uploadAlbum;
