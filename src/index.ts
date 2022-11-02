import express from 'express';
import { initializeApp } from 'firebase/app';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
	apiKey: 'AIzaSyADMil1RpvMgqGyM9S46vVgsYTegoLx8oM',
	authDomain: 'mern-music-streaming-9eace.firebaseapp.com',
	projectId: 'mern-music-streaming-9eace',
	storageBucket: 'mern-music-streaming-9eace.appspot.com',
	messagingSenderId: '99024871709',
	appId: '1:99024871709:web:e3018dc0cae624946741f4',
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get('/test_audio', async (req, res) => {
	const url = await getDownloadURL(ref(storage, 'music/test_audio.mp3'));

	res.send(url);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
