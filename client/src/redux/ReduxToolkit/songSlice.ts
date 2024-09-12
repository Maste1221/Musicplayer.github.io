import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Song {
  _id: string;
  song:string;
  title: string;
  artist: string;
  album: string;
  genre: string;
}

export interface SongsState {
  songs: Song[] | null;
  currentSong: Song | null;
  selected: string;
  error: string | null;
  success:string | null;
  search:string | null;
  count:number;
  totalArtists:number;
  totalAlbums:number;
  totalGenres:number;
  totalSongbygenre:number;
  genresCount: { 
    genre: string; 
    totalSongs: number }[];

    artistsCount:{
      totalSongs:number;
      artist:string;
      totalAlbums:number;

    } [];
    songCount:{
      totalSongs:number;
      album:string; }[];

}

const initialState: SongsState = {
  songs: null,
  currentSong: null,
  selected: '',
  error: null,
  success:null,
  search:null,
  count:0,
  totalArtists:0,
  totalAlbums:0,
  totalGenres:0,
  totalSongbygenre:0,
  genresCount:[],
  artistsCount:[],
  songCount:[],
};

export const songSlice = createSlice({
  name: 'Song',
  initialState,
  reducers: {
    getSongs: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
    },
    createSong: (state, action: PayloadAction<Song>) => {
      state.songs = state.songs ? [action.payload, ...state.songs] : [action.payload];
    },
  
          deleteSong: (state, action: PayloadAction<string>) => {
      if (state.songs) {
        state.songs = state.songs.filter((song) => song._id !== action.payload);
      }
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      if (state.songs) {
        const index = state.songs.findIndex((song) => song._id === action.payload._id);
        if (index !== -1) {
          state.songs[index] = action.payload;
        }
      }
    },
    playCurrent: (state, action: PayloadAction<Song>) => {
      state.currentSong = action.payload;
    },
    single: (state, action: PayloadAction<string>) => {
      state.selected = action.payload;
    },
    addError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setSuccess: (state, action: PayloadAction<string>) => {
        state.success = action.payload;
      },
      searchSong:(state,action:PayloadAction<string>)=>{
        state.search=action.payload;
      },
      totalSong:(state,action:PayloadAction<number>)=>{
        state.count=action.payload;
        state.totalArtists=action.payload;
        state.totalAlbums=action.payload;
        state.totalGenres=action.payload;
        state.totalSongbygenre=action.payload;
      },
      setGenresCount: (state, action: PayloadAction<{ genre: string; totalSongs: number }[]>) => {
        state.genresCount = action.payload;
      },
      setByArtist: (state, action: PayloadAction<{ 
         totalSongs:number;
        artist:string;
        totalAlbums:number; }[]>) => {
        state.artistsCount = action.payload;
      },
      songByalbum: (state, action: PayloadAction<{ 
        totalSongs:number;
       album:string;
       }[]>) => {
       state.songCount = action.payload;
     },
      




      
  },
});

export const {
  getSongs,
  totalSong,
  setGenresCount,
  searchSong,
  songByalbum,
  setByArtist,
  setSuccess,
  createSong,
  deleteSong,
  updateSong,
  playCurrent,
  single,
  addError,
} = songSlice.actions;

export default songSlice.reducer;