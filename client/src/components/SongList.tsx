import React, { useEffect, useState } from 'react';
import { Buttons, ConfirmContainer, ConfirmMessage, DeleteButton, EditButton, Holder, List, ListButton, SongItem, SongLists, YesButton } from './styles/Songlist.styles';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SONGS, DELETE_SONG, SEARCH_SONGS_REQUEST } from '../redux/ReduxToolkit/songActionTypes';
import { RootState } from '../app/store'; 
import { Song, playCurrent } from '../redux/ReduxToolkit/songSlice'; 
import { InputFieldSearch, Title } from './styles/SongUpload.styles';
import UpdateSongForm from './UpdateSongForm'; 
import {MdDelete} from 'react-icons/md';
import {FaEdit} from 'react-icons/fa'
const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);
  const [isUpdateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [songToDelete, setSongToDelete] = useState<Song | null>(null);
  const [songToUpdate, setSongToUpdate] = useState<Song | null>(null);

  const songs = useSelector((state: RootState) => state.songs.songs);

  const handleSongPlay = (song: Song) => {
    dispatch(playCurrent(song));
    setCurrentlyPlaying(song._id);
  };

  const handleDeleteSong = (song: Song) => {
    setSongToDelete(song); 
    setConfirmDialogOpen(true);
  };

  const confirmDelete = () => {
    if (songToDelete) {
      dispatch({ type: DELETE_SONG, payload: songToDelete._id }); 
      setSongToDelete(null); 
    }
    setConfirmDialogOpen(false);
  };

  const cancelDelete = () => {
    setSongToDelete(null); 
    setConfirmDialogOpen(false);
  };

  const handleUpdateSong = (song: Song) => {
    setSongToUpdate(song);
    setUpdateDialogOpen(true);
  };

  const fetchSongs = () => {
    dispatch({ type: GET_SONGS });
  };

  useEffect(() => {
    fetchSongs();
  }, [dispatch]);

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
  
    if (trimmedQuery) {
      dispatch({ type: SEARCH_SONGS_REQUEST, payload: trimmedQuery }); 
    } else {
      console.log("Please enter a search term."); 
    }
  };
  return (
    <SongLists>
      <Holder>
        <Title>Available songs</Title>
        {/* for search */}
        <InputFieldSearch
        type='text'
        placeholder='search for a song'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 

        />
        <Buttons onClick={handleSearch}>Search</Buttons>
        <SongItem>
          {songs && songs.length > 0 ? (
            songs.map((song) => (
              <List key={song._id}>
                <ListButton onClick={() => handleSongPlay(song)} >  
                  <strong>{song.title}</strong>
                </ListButton>
               
                <DeleteButton 
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    handleDeleteSong(song); 
                  }}
                >
                  <MdDelete/>
                </DeleteButton>
                <EditButton onClick={() => handleUpdateSong(song)}>
                  <FaEdit/>
                </EditButton>
              </List>
            ))
          ) : (
            <p>No songs available.</p>
          )}
        </SongItem>
      </Holder>

      {isConfirmDialogOpen && songToDelete && ( 
        <ConfirmContainer>
          <ConfirmMessage>Are you sure you want to delete "{songToDelete.title}" by {songToDelete.artist}?</ConfirmMessage>
          <YesButton onClick={confirmDelete}>Yes</YesButton>
          <DeleteButton onClick={cancelDelete}>No</DeleteButton>
        </ConfirmContainer>
      )}
      
      {/* Integrate UpdateSongForm */}
      {isUpdateDialogOpen && songToUpdate && (
        <UpdateSongForm
          song={songToUpdate}
          onClose={() => {
            fetchSongs(); 
            setUpdateDialogOpen(false);
          }}
        />
      )}
    </SongLists>
  );
};

export default SongList;