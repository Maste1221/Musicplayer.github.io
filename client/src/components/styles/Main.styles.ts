import styled from "@emotion/styled";
export const MainContainer=styled.div`
width:100vw;
height:100vh;
@media (max-width:786px){
overflow-y:scroll
}

`;
export const SongContainer=styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  width: 100vw;
  @media (max-width: 786px) {
    flex-direction: column;
  }


`;