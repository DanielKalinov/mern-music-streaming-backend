import mongoose from 'mongoose';
import Album from '../models/album';
import Artist from '../models/artist';

const { ObjectId } = mongoose.Types;

function addNewAlbum(artistId: string) {
	const newDocId = new ObjectId();

	const newDoc = new Album({
		_id: newDocId,
		artist: artistId,
		name: 'Leylines',
		duration: '1h 19m',
		year: 2016,
		albumImageUrl:
			'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/album-images%2FAES%20Dana%2FLeylines.jpg?alt=media&token=983b8421-a5bc-4603-bb47-67b9179e9064',
		tracks: [
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FAli.mp3?alt=media&token=db59dfd1-98f5-4b38-b779-df6d869180cf',
				artist: artistId,
				title: 'Alignments',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FBam.mp3?alt=media&token=95884a6a-66ec-484e-9579-d096381f200e',
				artist: artistId,
				title: 'Bam',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FOxyd.mp3?alt=media&token=f0a001b1-ff33-406d-ae78-8fa34733325a',
				artist: artistId,
				title: 'Oxyd',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FHeights.mp3?alt=media&token=f0a001b1-ff33-406d-ae78-8fa34733325a',
				artist: artistId,
				title: 'Heights',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FAdonai%20(edit).mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Adonaï',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FLeylines.mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Leylines',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FLysistrata.mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Lysistrata',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FSigns.mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Signs',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FInter.mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Inter',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FAES%20Dana%2FLeylines%2FBlossom.mp3?alt=media&token=09a7aa7d-ef60-4a73-9e92-2e54c85be781',
				artist: artistId,
				title: 'Blossom',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
		],
	});

	newDoc.save().then(() => {
		Artist.updateOne({ _id: artistId }, { $push: { albums: newDocId } })
			.then(() => console.log('Successfully added new album.'))
			.catch((err) => console.log('Error: ', err));
	});
}

export default addNewAlbum;
