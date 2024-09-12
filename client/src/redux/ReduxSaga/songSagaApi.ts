import axios from "axios";
import { Song } from "../ReduxToolkit/songSlice";
const API_URL='http://localhost:5000/api/song/';

export const fetchSongs=async():Promise<Song[]>=>{
    const response=await axios.get(`${API_URL}/getall`);
    return response.data;
}
export const searchSongsApi = async (query: string) => {
  try {
    const response = await axios.get(`${API_URL}/search/${query}`);
    return response.data; 
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error('Failed to fetch songs: ' + (error.response?.data?.message || error.message));
    } else {
      throw new Error('Failed to fetch songs: ' + (error as Error).message);
    }
  }
};

export const addSongApi= async (song: Song): Promise<Song> => {
    const response = await axios.post<Song>(`${API_URL}/create`, song);
    return response.data;
};
export const removeSong = async (songId: string): Promise<void> => {
    await axios.delete(`${API_URL}/deletsong/${songId}`);
  };
  export const updateSongApi = async (song: Song): Promise<Song> => {
    const response = await axios.patch(`${API_URL}/update/${song._id}`, song);
    return response.data;
  };
 
  export const totalSongsApi=async():Promise<Song[]>=>{
    const response=await axios.get(`${API_URL}/songcount`);
    return response.data;
}
export const totalSongsByGenreApi=async():Promise<Song[]>=>{
  const response=await axios.get(`${API_URL}/numberofsongbygenre`);
  return response.data;
}
export const totalSongbyArtistApi=async():Promise<Song[]>=>{
  const response=await axios.get(`${API_URL}/numberofsongsandalbumsbyartist`);
  return response.data;
}

export const totalSongsInAlbumApi=async():Promise<Song[]>=>{
  const response=await axios.get(`${API_URL}/numberofsongsinalbum`);
  return response.data;
}
