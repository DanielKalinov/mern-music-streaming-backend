import express from 'express';
// import { initializeApp } from 'firebase/app';
// import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Album from './models/album';
dotenv.config();

// const firebaseConfig = {
// 	apiKey: 'AIzaSyADMil1RpvMgqGyM9S46vVgsYTegoLx8oM',
// 	authDomain: 'mern-music-streaming-9eace.firebaseapp.com',
// 	projectId: 'mern-music-streaming-9eace',
// 	storageBucket: 'mern-music-streaming-9eace.appspot.com',
// 	messagingSenderId: '99024871709',
// 	appId: '1:99024871709:web:e3018dc0cae624946741f4',
// };
const dbURI =
	'mongodb+srv://daniel_12:eHNJzBNgpKEtUoXZ@cluster0.v723pfk.mongodb.net/mern-music-streaming-db?retryWrites=true&w=majority';
mongoose
	.connect(dbURI)
	.then(() => console.log('Connected to DB.'))
	.catch((err) => console.log(err));

// const firebase = initializeApp(firebaseConfig);
// const storage = getStorage(firebase);

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/albums', async (req, res) => {
	const AllAlbums = await Album.find();

	res.send(AllAlbums);
});

app.get('/albums/:id', async (req, res) => {
	const album = await Album.findById(req.params.id);

	res.send(album);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
