import styled from "@emotion/styled";
import { css } from '@emotion/react';
export const StaticsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left:20px;
  text-align: center;
  margin-top:40px;
  width: 100vw;
  @media (max-width: 786px) {
    flex-direction: row;
  }
`;
export const staticscss = css`
  background-color: lightgrey; 
  padding: 16px;
  border:0.5px solid;
  height:100vh;
  width:100vw;
  margin-top:5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); 
`;

export const StyleStat = styled.header`
  ${staticscss}
`;
export const StyleText=styled.h2`
font-size;10px;
font-weight:bold;
 align-items:center;
text-align:center;

`;

export const TotalSongStyle = styled.div`
  width: 500px;
  flex-direction: row; 
flex:1;
    grid-template-columns: 6fr 4fr;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background-color: grey;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: left;
  @media (max-width:786px){
    width: 100%;
      flex-direction: column;
    height: 100%;
    max-width: 100%;
    margin-top: 5px;
  grid-template-columns: 1fr;

  }
`;
export const TotalSongStyleGenre = styled.div`
 width: 500px;
 flex:1;
  flex-direction: row; 
 grid-template-columns: 6fr 4fr;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background-color: grey;
  border-radius: 8px;
  border: 1px solid #ccc;
  text-align: left;
  @media (max-width:786px){
    width: 100%;
      flex-direction: column;
    height: 100%;
    max-width: 100%;
    margin-top: 5px;
  grid-template-columns: 1fr;

  }
  
`;
export const Title=styled.h3`
font-size:20px;
color:green;
`;
export const ListText=styled.h3`
font-size:15px;
`;