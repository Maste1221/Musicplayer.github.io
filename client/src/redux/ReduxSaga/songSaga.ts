import { call, put, takeLatest } from 'redux-saga/effects';
import { ADD_SONG,DELETE_SONG,UPDATE_SONG,
  ADD_ERROR,GET_SONGS, 
  SEARCH_SONGS_SUCCESS, 
  SEARCH_SONGS_FAILURE, 
  SEARCH_SONGS_REQUEST, 
  TOTAL_COUNT_SONGS ,
TOTAL_SONGS_BY_GENRE,
TOTAL_SONGS_BY_ARTISTANDALBUMS,
TOTAL_SONGS_IN_ALBUM,
} from '../ReduxToolkit/songActionTypes';
import {
    
    deleteSong,
    getSongs,
    updateSong,
    addError,
    Song,
    createSong,
    setSuccess,
    searchSong,
    totalSong,
    setGenresCount,
    SongsState,
    setByArtist,
    songByalbum,
  }  from '../ReduxToolkit/songSlice';
  import { addSongApi,fetchSongs,removeSong,updateSongApi ,searchSongsApi, totalSongsApi, totalSongsByGenreApi, totalSongbyArtistApi, totalSongsInAlbumApi, } from './songSagaApi';
// fetch song saga
  function* fetchSongsSaga(): Generator<any, void, Song[]> {
    try {
      const songs: Song[] = yield call(fetchSongs);
      yield put(getSongs(songs));
    } catch (error) {
      yield put(addError('Failed to fetch'));
    }
  }
  // Add Song Saga
  function* createSongSaga(action: ReturnType<typeof createSong>) {
    try {
        const newSong: Song = yield call(addSongApi, action.payload);
        yield put(createSong(newSong));
        yield put(setSuccess("song uploaded successfully"));
    } catch (error) {
        yield put(addError('Failed to add song'));
    }
}
function* removeSongSaga(action: ReturnType<typeof deleteSong>) {
    try {
      yield call(removeSong, action.payload);
      yield put(deleteSong(action.payload)); // Dispatch action to remove song
    } catch (error) {
      yield put(addError('Failed to delete song'));
    }
  }
  function* modifySongSaga(action: ReturnType<typeof updateSong>) {
    try {
        const updatedSong: Song = yield call(updateSongApi, action.payload);
        yield put(updateSong(updatedSong));
    } catch (error) {
        yield put(addError('Failed to update song'));
    }
}


function* searchSongsSaga(action: ReturnType<typeof searchSong>) {
  try {
      const searchResults: Song[] = yield call(searchSongsApi, action.payload);
            yield put(getSongs(searchResults)); 
  } catch (error) {
      yield put(addError('Failed to search for songs'));
  }
}
function* countTotalSongsSaga() {
  try {
    const response: { totalSongs: number; totalArtists: number; totalAlbums: number; totalGenres: number } = yield call(totalSongsApi);   
    yield put(totalSong(response.totalSongs)); 
    yield put(totalSong(response.totalArtists));
    yield put(totalSong(response.totalAlbums));
    yield put(totalSong(response.totalGenres));
  } catch (error) {
    console.error('Error fetching total songs:', error);
  }
}

function* countTotalSongsByGenreSaga() {
  try {
    const response: SongsState = yield call(totalSongsByGenreApi);

    if (response.genresCount) {
      yield put(setGenresCount(response.genresCount)); 
    } else {
      yield put(addError('Invalid response structure from the API'));
    }
  } catch (error) {
    yield put(addError('Failed to fetch the number of songs by genre'));
  }
}
function* getSongsByAlbumandArtistSaga() {
  try {
    const response: SongsState = yield call(totalSongbyArtistApi);

    if (response.artistsCount) {
      yield put(setByArtist(response.artistsCount));
    } else {
      yield put(addError('Invalid response structure from the API'));
    }
  } catch (error) {
    yield put(addError('Failed to fetch the number of songs by genre'));
  }
}
function* getTotalSongsInAlbum() {
  try {
    const response: SongsState = yield call(totalSongsInAlbumApi);

    if (response.songCount) {
      yield put(songByalbum(response.songCount));
    } else {
      yield put(addError('Invalid response structure from the API'));
    }
  } catch (error) {
    yield put(addError('Failed to fetch the number of songs by genre'));
  }
}



export function* watchSongActions() {
    yield takeLatest(ADD_SONG, createSongSaga);
    yield takeLatest(GET_SONGS, fetchSongsSaga);
    yield takeLatest(UPDATE_SONG, modifySongSaga);
    yield takeLatest(DELETE_SONG, removeSongSaga);
    yield takeLatest(SEARCH_SONGS_REQUEST, searchSongsSaga);
    yield takeLatest(TOTAL_COUNT_SONGS, countTotalSongsSaga);
yield takeLatest(TOTAL_SONGS_BY_GENRE,countTotalSongsByGenreSaga);
 yield takeLatest(TOTAL_SONGS_BY_ARTISTANDALBUMS,getSongsByAlbumandArtistSaga);
 yield takeLatest(TOTAL_SONGS_IN_ALBUM,getTotalSongsInAlbum);

}