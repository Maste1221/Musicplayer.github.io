import express from 'express'
import { createSong, deleteSong, getallSongs, getById, getCountbyGenere, getCountsFromSongs, getCountSongsInAlbum, getSongsAndAlbumsCountByArtist, 
   updateSong } from '../controllers/SongController.js';
const router = express.Router();
router.post('/create',createSong);
router.get('/getall',getallSongs);
router.get('/getsong/:id',getById);
router.delete('/deletsong/:id',deleteSong);
router.patch('/update/:id',updateSong);
router.get('/songcount',getCountsFromSongs);
router.get('/numberofsongbygenre',getCountbyGenere)
router.get('/numberofsongsandalbumsbyartist',getSongsAndAlbumsCountByArtist)
router.get('/numberofsongsinalbum',getCountSongsInAlbum);
// router.get('/search/:query',searchSongs)
export default router;