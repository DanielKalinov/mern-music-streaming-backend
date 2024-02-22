import mongoose from 'mongoose';
import Album from '../models/album';
import Track from '../models/track';
import Artist from '../models/artist';

const uploadAlbum = () => {
	const artistId = '65d0dd4c71e5d43f64635411';
	const albumId = new mongoose.Types.ObjectId();

	const albumTracks = [
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FTraverse.mp3?alt=media&token=30ddc1fe-bf89-4c1d-96a4-32712be990da',
			artist: [artistId],
			title: 'Traverse',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FOkalite.mp3?alt=media&token=97ba2209-2054-4268-beef-e1ccc62d6c66',
			artist: [artistId],
			title: 'Okalite',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FCrimean%20Mountains.mp3?alt=media&token=291ff8bf-0f2b-4c1c-9b96-6431a909595a',
			artist: [artistId],
			title: 'Crimean Mountains',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FAncestry.mp3?alt=media&token=175e6844-5c5e-41e5-a8ea-a914845b8194',
			artist: [artistId],
			title: 'Ancestry',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FTreeline.mp3?alt=media&token=62aa211f-84b9-4a5b-bf2e-970980fff002',
			artist: [artistId],
			title: 'Treeline',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FDistance%20C.mp3?alt=media&token=89795d63-b00c-4bd3-831b-120821279b8b',
			artist: [artistId],
			title: 'Distance C',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FSubtleties%20at%20Dawn.mp3?alt=media&token=957e3262-4707-47b0-84ea-772d97e8a693',
			artist: [artistId],
			title: 'Subtleties at Dawn',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FDissolve.mp3?alt=media&token=d042752a-0868-4aca-a75b-a2a07b0925aa',
			artist: [artistId],
			title: 'Disolve',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FMin%20Us.mp3?alt=media&token=c6e6e6cd-b536-4a60-af1b-3458b8bdc7c2',
			artist: [artistId],
			title: 'Min Us',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FPulvis.mp3?alt=media&token=2a6644fa-f44b-4d48-bb39-bc83f0770108',
			artist: [artistId],
			title: 'Pulvis',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FUnphysical%20Body.mp3?alt=media&token=eb670534-6024-4ac2-9f56-ed375c5e79d9',
			artist: [artistId],
			title: 'Unphysical Body',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMartin%20Nonstatic%2FTreeline%2FAdventus.mp3?alt=media&token=01f665a0-a4d9-4d44-ba94-3f3525faffd9',
			artist: [artistId],
			title: 'Adventus',
			album: albumId,
		},
	];

	new Album({
		_id: albumId,
		name: 'Treeline',
		duration: '1h 15m',
		year: 2020,
		artist: [artistId],
		albumImageUrl:
			'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/album-images%2FMartin%20Nonstatic%2FTreeline.jpg?alt=media&token=7b97bdf9-ee81-4381-b237-df0440078995',
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
