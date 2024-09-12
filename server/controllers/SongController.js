import { json } from "express";
import multer from 'multer';
import Song from "../model/SongsModel.js";

const storage = multer.diskStorage({
    destination: "./public/uploads/",
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

const fileFilter = (req, file, cb) => {
    console.log('Uploaded file MIME type:', file.mimetype); 
    const mimeTypes = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg','video/mp4'];
    if (mimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only audio files are allowed!'), false);
    }
};

const uploads = multer({
    storage: storage,
    fileFilter: fileFilter,
});

// Controller function to create a new song
export const createSong = [
    uploads.single('song'),
    async (req, res) => {
        if (!req.file) {
            return res.status(400).json({ error: 'Please Enter a Valid Audio File' });
        }

        const songFileName = req.file.filename; 
        const { title, artist, album, genre } = req.body;
        const newSong = new Song({
            song: songFileName,
            title,
            artist,
            album,
            genre,
        });

        try {
           // Check if the song already exists
           const existingSong = await Song.findOne({ song: songFileName,
            title });
            
           if (existingSong) {
              console.log('A song with this song and title already exists.')
            return res.status(400).json({ error: 'A song with this song and title already exists.' });
           }
            const savedSong = await newSong.save(); 
            return res.status(201).json({
                message: "Song created successfully!",
                song: savedSong,
            });
        } catch (error) {
            console.error(error); 
            return res.status(400).json({
                message: "Error creating song",
                error: error.message,
            });
        }
    }
];
//get all songs
export const getallSongs = [
  async (req, res) => {
    try {
      const songs = await Song.find();
      res.json(songs);
    } catch (error) {
      res.status(500).json({ message: "error for getting all songs!" });
    }
  },
];
// update the song information
export const updateSong = [
  async (req, res) => {
    const { id } = req.params;
    const { song,title, artist, album, genre } = req.body;
    try {
      const update = await Song.findByIdAndUpdate(
        id,
        {
        // song,
        title,
          artist,
          album,
          genre,
        },
        { new: true, runValidators: true }
      );
      if (!update) {
        return res.status(404).json({ message: "song not found" });
      }
      // if success
      return res
        .status(200)
        .json({ message: "song is updated successfully!", song: update });
    } catch (error) {
      console.error(error);
      return res
        .status(400)
        .json({ message: "error updating song", error: error.message });
    }
  },
];
//get song by id
export const getById = [
  async (req, res) => {
    const { id } = req.params;
    try {
      const song = await Song.findById(id);
      if (!song) {
        return res.status(404).json({ message: "Song not found" });
      }
      res.json(song);
    } catch (error) {
      return res.status(500).json({ message: "error for getting song" });
    }
  },
];
// delete song by id

export const deleteSong = [
  async (req, res) => {
    const { id } = req.params;

    try {
      const deleteSong = await Song.findByIdAndDelete(id);
      if (!deleteSong) {
        return res.status(404).json({ message: "Song not found" });
      }

      return res.json({
        message: "Song deleted successfully!",
        id,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error deleting song",
        error: error.message,
      });
    }
  },
];
// total number os songs
export const getCountsFromSongs = [
  async (req, res) => {
    try {
      const totalSongs = await Song.countDocuments();

      const uniqueArtists = await Song.distinct("artist");
      const totalArtists = uniqueArtists.length;

      const uniqueAlbums = await Song.distinct("album");
      const totalAlbums = uniqueAlbums.length;

      const uniqueGenres = await Song.distinct("genre");
      const totalGenres = uniqueGenres.length;
      //rertun counts
      return res.status(200).json({
        totalSongs,
        totalArtists,
        totalAlbums,
        totalGenres,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "error retriving counts form songs",
        error: error.message,
      });
    }
  },
];
//total number os songs in every genere
export const getCountbyGenere=[
    async(req,res)=>{
        try {
            const genresCount=await Song.aggregate([
                {
                    $group:{
                        _id:"$genre",
                        totalSongs:{$sum:1}
                    }
                },
                {
                    $project:{
                        genre:"$_id",
                        totalSongs:1,
                        _id:0
                    }
                }
            ]);
            //rertun 
            return res.status(200).json({genresCount});
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message:"error for conting number",
                error:error.message,
            })
        }
    }
]
// get the number of songs and albums each artist has
export const getSongsAndAlbumsCountByArtist = async (req, res) => {
    try {
        const artistsCount = await Song.aggregate([
            {
                $group: {
                    _id: "$artist", 
                    totalSongs: { $sum: 1 },
                    totalAlbums: { $addToSet: "$album" } 
                }
            },
            {
                $project: {
                    artist: "$_id",
                    totalSongs: 1,
                    totalAlbums: { $size: "$totalAlbums" }, 
                    _id: 0 
                }
            }
        ]);

        return res.status(200).json({artistsCount});
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error retrieving songs and albums count by artist',
            error: error.message,
        });
    }
};
// number os songs in each album 
export const getCountSongsInAlbum=[
    async(req,res)=>{
        try {
            const songCount=await Song.aggregate([
              {
                $group: {
                    _id:"$album",
                    totalSongs:{$sum:1}
                }
              },
              {
                $project:{
                    album:"$_id",
                    totalSongs: 1,
                    _id:0

                }
              }
            ])
            //retun 
          return res.status(200).json({songCount});

        } catch (error) {
            console.error(error)
            return res.status(500).json({
                message:"errro for counting",
                error:error.message,
            })
        }
    }
]
// search song
export const searchSongs = async (req, res) => {
    const { query } = req.params; 
    const searchTerms = query; 
    const mongoQuery = {};
    if (searchTerms) {
        const terms = searchTerms.split(/[\s,]+/).filter(Boolean);
        mongoQuery.$or = [
          { title: { $regex: terms.join('|'), $options: 'i' } } , 
            { artist: { $regex: terms.join('|'), $options: 'i' } },
            { album: { $regex: terms.join('|'), $options: 'i' } }, 
            { genre: { $regex: terms.join('|'), $options: 'i' } }  
        ];
    }

    try {
        const songs = await Song.find(mongoQuery);
// if there is song or not 
       if (songs.length === 0) {
        return res.status(404).json({
            message: 'No songs found matching your query.',
        });
    }
        return res.status(200).json(songs); 
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error searching for songs',
            error: error.message,
        });
    }
};