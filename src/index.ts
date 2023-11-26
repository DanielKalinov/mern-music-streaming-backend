import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Album from './models/album';
require('./models/artist');
require('./models/track');

dotenv.config();

const dbURI =
	'mongodb+srv://daniel_12:eHNJzBNgpKEtUoXZ@cluster0.v723pfk.mongodb.net/mern-music-streaming-db?retryWrites=true&w=majority';
mongoose
	.connect(dbURI)
	.then(() => console.log('Connected to DB.'))
	.catch((err) => console.log(err));

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

// Album.findOne({ _id: '6562039b9151454bf5924a7e' })
// 	.populate({
// 		path: 'tracks',
// 		populate: {
// 			path: 'artist',
// 			model: 'artist',
// 		},
// 	})
// 	.exec(function (err, album) {
// 		console.log(album?.tracks);
// 		// album.tracks[0].artist.name will be populated
// 	});

app.get('/albums', async (req, res) => {
	const AllAlbums = await Album.find();

	res.send(AllAlbums);
});

app.get('/albums/:id', async (req, res) => {
	const album = await Album.findById(req.params.id);

	res.send(album);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
