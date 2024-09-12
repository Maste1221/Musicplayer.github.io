import React, { useEffect } from 'react'
import {  StaticsContainer, StyleStat, StyleText, Title, TotalSongStyle, TotalSongStyleGenre } from './styles/Statstics.styles'
import { useDispatch, useSelector } from 'react-redux'
import { TOTAL_COUNT_SONGS, TOTAL_SONGS_BY_GENRE ,TOTAL_SONGS_BY_ARTISTANDALBUMS, TOTAL_SONGS_IN_ALBUM} from '../redux/ReduxToolkit/songActionTypes';
import { RootState } from '../app/store';
import { MainContainer } from './styles/Main.styles';
const  SongsStatstics:React.FC=() =>{
  const dispatch=useDispatch();
  const totalSongs = useSelector((state: RootState) => state.songs.count); 
  const totalArtists=useSelector((state:RootState)=>state.songs.totalArtists);
  const totalAlbums=useSelector((state:RootState)=>state.songs.totalAlbums);
  const totalGenres=useSelector((state:RootState)=>state.songs.totalGenres);
const  totalSongsByGenre=useSelector((state:RootState)=>state.songs.totalSongbygenre)
const generesCount=useSelector((state:RootState)=>state.songs.genresCount);
  const songbyArtist=useSelector((state:RootState)=>state.songs.artistsCount);
  const songInAlbums=useSelector((state:RootState)=>state.songs.songCount);
useEffect(() => {
    dispatch({ type: TOTAL_COUNT_SONGS }); 
  }, [dispatch]);
  useEffect(()=>{
    dispatch({type:TOTAL_SONGS_BY_GENRE});
  },[dispatch]);
  useEffect(()=>{
    dispatch({type:TOTAL_SONGS_BY_ARTISTANDALBUMS});

  },[dispatch]);
  useEffect(()=>{
    dispatch({type:TOTAL_SONGS_IN_ALBUM});
  },[dispatch]);
  return (
    
    <MainContainer>
      <StyleText>Song information </StyleText>
      <StaticsContainer>
      <TotalSongStyle>
   
  <Title>Number of Avaliable Songs</Title> 
   Total songs are  {totalSongs} <br/>
   Total artists {totalArtists}<br/>
    Total albums are {totalAlbums}<br/>
    Total genres are {totalGenres}<br/>
    Total songs by genres are {totalSongsByGenre}
    
   
   
   
    </TotalSongStyle>
    <TotalSongStyleGenre>
    <Title>Total Songs by Genre</Title>
      {generesCount.length > 0 ? (
        <ul>
          {generesCount.map((genre) => (
            <li key={genre.genre}>
             <strong>for {genre.genre}: there are</strong> 
              <strong>{genre.totalSongs} songs</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No genres available.</p>
      )}
    </TotalSongStyleGenre>
   
 
    <TotalSongStyleGenre>
    <Title>Total Songs by Artist and Album</Title>
      {songbyArtist && songbyArtist.length > 0 ? (
        <ul>
          {songbyArtist.map((item) => (
            <li key={item.artist}>
              <strong>Artist:</strong> {item.artist} <br />
              <strong>Total Songs:</strong> {item.totalSongs} <br />
              <strong>Total Albums:</strong> {item.totalAlbums}
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs by artist available.</p>
      )}
    </TotalSongStyleGenre>
    <TotalSongStyle>
    <Title>Total Songs by Albums </Title>
      {songInAlbums && songInAlbums.length > 0 ? (
        <ul>
          {songInAlbums.map((item) => (
            <li key={item.album}>
              <strong>album:</strong> {item.album} <br />
              <strong>Total Songs:</strong> {item.totalSongs} <br />
            </li>
          ))}
        </ul>
      ) : (
        <p>No songs by artist available.</p>
      )}
    </TotalSongStyle>
      </StaticsContainer>
   
    </MainContainer>

  )
}

export default SongsStatstics