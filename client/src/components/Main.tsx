import React from 'react'
import { MainContainer, SongContainer } from './styles/Main.styles'
import Header from './Header'
import SongUploadForm from './SongUploadForm'
import SongList from './SongList'
import SongDisplay from './SongDisplay'
import SongsStatstics from './SongsStatstics'

const  Main:React.FC=() =>{
  return (
 <MainContainer>
    <Header/>
    <SongContainer>
        <SongUploadForm/>
        <SongList/>
        <SongDisplay/>
    </SongContainer>
    <SongsStatstics/>
 </MainContainer>
  )
}

export default Main
