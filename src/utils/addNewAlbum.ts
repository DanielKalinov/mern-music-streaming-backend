import mongoose from 'mongoose';
import Album from '../models/album';
import Artist from '../models/artist';

const { ObjectId } = mongoose.Types;

function addNewAlbum(artistId: string) {
	const newDocId = new ObjectId();

	const newDoc = new Album({
		_id: newDocId,
		artist: [artistId],
		name: 'Hereafter',
		duration: '1h 1m',
		year: 2020,
		albumImageUrl:
			'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/album-images%2FMikTek%2FElsewhere.jpg?alt=media&token=314e02e0-67e0-4b3f-9b39-e031002c2f54',
		tracks: [
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FDawsonia.mp3?alt=media&token=0044f4a3-524e-43ea-9147-52a73590a9a9',
				artist: [artistId],
				title: 'Dawsonia',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FIs%20Calm.mp3?alt=media&token=869fa0d6-38e9-411b-badf-7a47baf985fc',
				artist: [artistId],
				title: 'Is Calm',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FBiosphere%20(Re-Visit).mp3?alt=media&token=313d748d-3df2-4ff4-8b28-6b3963139718',
				artist: [artistId],
				title: 'Biosphere - Re-Visit',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FDeep%20Dive%20Conversations.mp3?alt=media&token=23d134ae-43a0-4277-a6d1-32e4d8e01dbc',
				artist: [artistId],
				title: 'Deep Dive Conversations',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FOmnipresence.mp3?alt=media&token=3911bb54-a613-4f96-ba9d-f8caff1de6b5',
				artist: [artistId],
				title: 'Omnipresence',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FChronicles%20(Genesis%20Live%20Edit).mp3?alt=media&token=78c2357d-3573-4a87-9c1b-11964a5bd0d2',
				artist: [artistId],
				title: 'Chronicles - Genesis Live Edit',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FParenthesis%20(Ozora%20Live%20Edit).mp3?alt=media&token=2e462d2b-f9a1-4cf0-a62a-502d515df93f',
				artist: [artistId],
				title: 'Parenthesis- Ozora Live Edit',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FObnubilate.mp3?alt=media&token=08d3a786-c276-4b73-9f7c-b6843f0594cc',
				artist: [artistId],
				title: 'Obnubilate',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FAtmosphere%20of%20Neglect.mp3?alt=media&token=d43476e3-8b26-4f83-80a9-a4262f8da060',
				artist: [artistId],
				title: 'Atmosphere of Neglect',
				album: newDocId,
				_id: new mongoose.Types.ObjectId(),
			},
			{
				audioUrl:
					'https://firebasestorage.googleapis.com/v0/b/mern-music-streaming-9eace.appspot.com/o/music%2FMikTek%2FHereafter%2FAnisotropy.mp3?alt=media&token=a1f8a1be-affe-4db4-bfaf-5ae2ab9e89db',
				artist: [artistId],
				title: 'Anisotropy',
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
