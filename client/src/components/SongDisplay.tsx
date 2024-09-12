import React, { useRef, useEffect } from 'react';
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';
import { AudioPlayer, SelectSong, SongDisplayConatiner } from './styles/Songdisplaystyle.style';

const SongDisplay: React.FC = () => {
  const currentSong = useSelector((state: RootState) => state.songs.currentSong);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && currentSong) { 
      audioRef.current.load();
      audioRef.current.play().catch(error => {
        console.error('Auto-play failed:', error); 
      });
    }
  }, [currentSong]);

  if (!currentSong) {
    return <SelectSong>Select a song to play</SelectSong>;
  }

  return (
    <SongDisplayConatiner>
      <h2>
        Now Playing: {currentSong.title} by {currentSong.artist}
      </h2>

      <AudioPlayer controls ref={audioRef}>
        <source src={`http://localhost:5000/uploads/${currentSong.song}`} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </AudioPlayer>

      {/* Assuming there's an image property for the album cover */}
      {/* {currentSong.image && <img src={currentSong.image} alt={currentSong.title} />} */}
    </SongDisplayConatiner>
  );
};

export default SongDisplay;