import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_SONG } from '../redux/ReduxToolkit/songActionTypes';
import { Song } from '../redux/ReduxToolkit/songSlice';
import {  YesButton, DeleteButton } from './styles/Songlist.styles';
import { UpdateConatiner,  } from './styles/SongUpdateStyle.styles';
import { InputField } from './styles/SongUpload.styles';

interface UpdateSongFormProps {
  song: Song | null;
  onClose: () => void;
}

const UpdateSongForm: React.FC<UpdateSongFormProps> = ({ song, onClose }) => {
  const dispatch = useDispatch();
  const [updatedTitle, setUpdatedTitle] = useState(song?.title || '');
  const [updatedArtist, setUpdatedArtist] = useState(song?.artist || '');
  const [updatedAlbum, setUpdatedAlbum] = useState(song?.album || '');
  const [updatedGenre, setUpdatedGenre] = useState(song?.genre || '');

  const confirmUpdate = () => {
    if (song) {
      const updatedSong = {
        ...song,
        title: updatedTitle,
        artist: updatedArtist,
        album: updatedAlbum,
        genre: updatedGenre,
      };
      dispatch({ type: UPDATE_SONG, payload: updatedSong}); 
      alert("updated successfully!")
      onClose(); 
    }
  };

  return (
    <UpdateConatiner>
      <h2>Update Song Details</h2>
     
        <InputField
          type="text"
          value={updatedTitle}
          onChange={(e) => setUpdatedTitle(e.target.value)}
        />
     
      
        <InputField
          type="text"
          value={updatedArtist}
          onChange={(e) => setUpdatedArtist(e.target.value)}
        />
     
    
        <InputField
          type="text"
          value={updatedAlbum}
          onChange={(e) => setUpdatedAlbum(e.target.value)}
        />
     
     
        <InputField
          type="text"
          value={updatedGenre}
          onChange={(e) => setUpdatedGenre(e.target.value)}
        />
      <YesButton onClick={confirmUpdate}>Update</YesButton>
      <DeleteButton onClick={onClose}>Cancel</DeleteButton>
    </UpdateConatiner>
  );
};

export default UpdateSongForm;