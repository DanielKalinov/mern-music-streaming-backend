//@ts-nocheck
import mongoose from 'mongoose';
import Artist from '../models/artist';
import Album from '../models/album';

const { ObjectId } = mongoose.Types;

async function addToTopTracks({
	artistId,
	albumId,
	trackId,
}: {
	artistId: string;
	albumId: string;
	trackId: string;
}) {
	const res = await Album.findOne({ albumId });
	const targetTrack = res?.tracks.find(
		(item) => item._id?.toString() == trackId
	);
	const { audioUrl, artist, title, album } = targetTrack;

	Artist.updateOne(
		{ artistId },
		{
			$push: {
				tracks: {
					audioUrl,
					artist,
					title,
					album,
					_id: new ObjectId(),
				},
			},
		}
	)
		.then(() => console.log('Successfully updated document.'))
		.catch((err) => console.log('Error: ', err));
}

export default addToTopTracks;
