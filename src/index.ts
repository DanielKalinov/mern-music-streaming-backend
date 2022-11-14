import express from 'express';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Song from './models/song';
dotenv.config();

const firebaseConfig = {
	apiKey: 'AIzaSyADMil1RpvMgqGyM9S46vVgsYTegoLx8oM',
	authDomain: 'mern-music-streaming-9eace.firebaseapp.com',
	projectId: 'mern-music-streaming-9eace',
	storageBucket: 'mern-music-streaming-9eace.appspot.com',
	messagingSenderId: '99024871709',
	appId: '1:99024871709:web:e3018dc0cae624946741f4',
};
const dbURI =
	'mongodb+srv://daniel_12:eHNJzBNgpKEtUoXZ@cluster0.v723pfk.mongodb.net/mern-music-streaming-db?retryWrites=true&w=majority';
mongoose
	.connect(dbURI)
	.then(() => console.log('Connected to DB.'))
	.catch((err) => console.log(err));

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());

app.get('/test_audio', async (req, res) => {
	const song = await Song.findById('637287fcd07c18708770903d');

	const downloadUrl = await getDownloadURL(ref(storage, song?.audioUrl));

	res.send(downloadUrl);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
