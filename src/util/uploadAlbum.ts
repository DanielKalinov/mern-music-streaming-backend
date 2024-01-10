//@ts-nocheck
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
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FChernozem%20(Intro).mp3?alt=media&token=24251b08-bfb4-4333-a611-50bc6036e220',
			artist: [artistId],
			title: 'Chernozem - Intro',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FIris%20Rotation.mp3?alt=media&token=b7bbb801-5de0-4f77-bf7a-ea54564a86f3',
			artist: [artistId],
			title: 'Iris Rotation',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FDusts.mp3?alt=media&token=5f956cee-1bd8-4cf7-8e1c-9296f0534151',
			artist: [artistId],
			title: 'Dusts',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FOpalin.mp3?alt=media&token=bede3eb5-2b00-44ac-bd50-e30338c95e0f',
			artist: [artistId],
			title: 'Opalin',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FMemory%20Shell%20(Lost%20Radio%20Edit).mp3?alt=media&token=9a14fcbf-1080-4263-a8d5-659c62e81b81',
			artist: [artistId],
			title: 'Memory Shell - Lost Radio Edit',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FHaze.mp3?alt=media&token=d51bca2f-0dcd-44c2-85e6-9027fb55f314',
			artist: [artistId],
			title: 'Haze',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FShouting%20Valley.mp3?alt=media&token=81f6d3e9-eee5-4245-bfc0-98ff37bb6464',
			artist: [artistId],
			title: 'Shouting Valley',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FCities%20Update.mp3?alt=media&token=c0295493-7316-46bd-a61a-1c23d889e187',
			artist: [artistId],
			title: 'Cities Update',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FSubmorphing.mp3?alt=media&token=7b70bffb-796c-42ba-98ee-cf20c6b5e7c9',
			artist: [artistId],
			title: 'Submorphing',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FGrounds%20Around.mp3?alt=media&token=84025a8e-3c56-42ec-82bc-abb1f46cb9cc',
			artist: [artistId],
			title: 'Grounds Around',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FExposure%20(AES%20Dana%20Remix).mp3?alt=media&token=c1b3c6a2-adb2-42c4-acb1-825a75b11dc2',
			artist: [artistId],
			title: 'Exposure - AES Dana Remix',
			album: albumId,
		},
		{
			_id: new mongoose.Types.ObjectId(),
			audioUrl:
				'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FMemory%20Shell%2FChernozem%20(Closing).mp3?alt=media&token=4334d8fb-1aa3-48ae-af8b-db2be5220794',
			artist: [artistId],
			title: 'Chernozem - Closing',
			album: albumId,
		},
	];

	new Album({
		_id: albumId,
		name: 'Memory Shell',
		duration: '1h 10m',
		year: 2004,
		artist: [artistId],
		albumImageUrl:
			'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/album-images%2FAES%20Dana%2FMemory%20Shell.jpg?alt=media&token=e1715fb6-87a4-4f47-a140-88bd19707525',
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
