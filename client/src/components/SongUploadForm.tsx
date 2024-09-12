import React, { ChangeEvent, useState } from 'react';
import { InputField, Title, UploadButton, UploadContainer } from './styles/SongUpload.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_SONG } from '../redux/ReduxToolkit/songActionTypes';
import { RootState } from '../app/store';
const SongUploadForm: React.FC = () => {
    const [formData, setFormData] = useState({
        song: null as File | null,
        title: '',
        artist: '',
        album: '',
        genre: '',
    });

    const dispatch = useDispatch();
    const setSuccess = useSelector((state: RootState) => state.songs.success);
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFormData({ ...formData, song: event.target.files[0] });
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const formDataToSubmit = new FormData();
        if (formData.song) {
            formDataToSubmit.append('song', formData.song);
        }
        formDataToSubmit.append('title', formData.title);
        formDataToSubmit.append('artist', formData.artist);
        formDataToSubmit.append('album', formData.album);
        formDataToSubmit.append('genre', formData.genre);
    
        try {
            dispatch({ type: ADD_SONG, payload: formDataToSubmit });
            alert("Song uploaded successfully");
    
            // Reset the form data
            setFormData({
                song: null,
                title: '',
                artist: '',
                album: '',
                genre: '',
            });
        } catch (error) {
            alert("Failed to upload song");
        }
    };

    return (
        
        <UploadContainer>
          
            <form onSubmit={handleSubmit}>
            <Title>Upload Your Song</Title>
                <InputField type="file" accept="audio/*" onChange={handleFileChange} required />
                <InputField 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={formData.title} 
                    onChange={handleChange} 
                    required 
                />
                <InputField 
                    type="text" 
                    name="artist" 
                    placeholder="Artist" 
                    value={formData.artist} 
                    onChange={handleChange} 
                    required
                />
                <InputField 
                    type="text" 
                    name="album" 
                    placeholder="Album" 
                    value={formData.album} 
                    onChange={handleChange} 
                    required 
                />
                <InputField 
                    type="text" 
                    name="genre" 
                    placeholder="Genre" 
                    value={formData.genre} 
                    onChange={handleChange} 
                    required 
                />
                <UploadButton type="submit" value="Upload Song" />
            </form>

        </UploadContainer>
    );
};

export default SongUploadForm;