import express from 'express';
import { createReadStream, stat } from 'fs';
import { promisify } from 'util';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const filename = './test_audio.mp3';
const fileInfo = promisify(stat);

app.get('/', (req, res) => res.send('Hello World'));

app.get('/test_audio', async (req, res) => {
	const { size } = await fileInfo(filename);
	const range = req.headers.range;
	if (range) {
		let [start, end]: number[] | string[] = range
			.replace(/bytes=/, '')
			.split('-');
		start = parseInt(start, 10);
		end = end ? parseInt(end, 10) : size - 1;

		res.writeHead(206, {
			'Content-Range': `bytes ${start}-${end}/${size}`,
			'Accept-Ranges': 'bytes',
			'Content-Length': start - end + 1,
			'Content-Type': 'audio/mp3',
		});

		createReadStream(filename, { start, end }).pipe(res);
	} else {
		res.writeHead(200, {
			'Content-Type': 'audio/mp3',
			'Content-Length': size,
		});

		createReadStream(filename).pipe(res);
	}
});

app.listen(port, () => console.log(`Listening on port ${port}`));
