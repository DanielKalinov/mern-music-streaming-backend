import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import Album from './models/album';
import Artist from './models/artist';
import Playlist from './models/playlist';
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

// Log error if there is one
const handleError = (err: NativeError | null) =>
  err && console.log('Error: ', err);

const executeQuery = (query: any, res: any) => {
  query.exec((err: NativeError | null, result: any) => {
    handleError(err);
    res.send(result);
  });
};

// Return all artists
app.get('/artists', (_, res) => {
  const query = Artist.find()
    .populate('albums')
    .populate({
      path: 'tracks.track',
      model: 'track',
      populate: [
        { path: 'artist', model: 'artist' },
        { path: 'album', model: 'album' },
      ],
    });
  executeQuery(query, res);
});

// Return an artist by id
app.get('/artist/:id', (req, res) => {
  const query = Artist.findOne({ _id: req.params.id })
    .populate({
      path: 'albums',
      populate: {
        path: 'tracks.track',
        model: 'track',
        populate: [
          { path: 'artist', model: 'artist' },
          { path: 'album', model: 'album' },
        ],
      },
    })
    .populate({
      path: 'tracks.track',
      model: 'track',
      populate: [
        { path: 'artist', model: 'artist' },
        { path: 'album', model: 'album' },
      ],
    });

  executeQuery(query, res);
});

// Return an album by id
app.get('/albums/:id', (req, res) => {
  const query = Album.findOne({ _id: req.params.id })
    .populate('artist')
    .populate({
      path: 'tracks.track',
      model: 'track',
      populate: [
        { path: 'artist', model: 'artist' },
        { path: 'album', model: 'album' },
      ],
    });

  executeQuery(query, res);
});

// Return all playlists
app.get('/playlists', (_, res) => {
  const query = Playlist.find().populate({
    path: 'tracks.track',
    model: 'track',
    populate: [
      { path: 'artist', model: 'artist' },
      { path: 'album', model: 'album' },
    ],
  });
  executeQuery(query, res);
});

// Return a playlist by id
app.get('/playlists/:id', (req, res) => {
  const query = Playlist.findOne({ _id: req.params.id }).populate({
    path: 'tracks.track',
    model: 'track',
    populate: [
      { path: 'artist', model: 'artist' },
      { path: 'album', model: 'album' },
    ],
  });

  executeQuery(query, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
