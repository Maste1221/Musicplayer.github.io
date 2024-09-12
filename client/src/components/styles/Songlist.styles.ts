import styled from "@emotion/styled";
export const SongLists=styled.div`
  width: 400px;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
 
  grid-template-columns: 6fr 4fr;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  @media (max-width:786px){
    width: 100%;
    max-width: 100%;
    margin-top: 5px;
    grid-template-columns: 1fr;
  }
`;
export const Title=styled.h3`
align-items:center;
color:black;
margin-top:3px;

`
export const SongItem=styled.p`
align-itmes:center;
 margin-top:auto;
 `;
export const List=styled.section`
display:flex;
$:hover{
background-color:blue;
color:black
}
background-color:white;

`;
export const Buttons=styled.button`
 border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 100;
  padding: 10px 20px;
  margin-right: 20px;
  margin-left:5px;
  background-color: green;
  color: ${({ color }) => color || "white"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
      background-color: #45a049;

  }
`;
export const ListButton = styled.li`
  display: flex;
  width: 100%;
  border: 1px;
  margin-top: 0.1em;
  color: black;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background-color:grey;
  }
 
`;
export const Holder = styled.div`
    margin-bottom: 100px;
    width: 100%;
`
export const DeleteButton = styled.button`
  background: red;
  border-radius: 10px;
  color: white;
  padding: 5px 7px;
  cursor: pointer;
  font-size: 20px;
  width: 80px;  
  height: 40px; 
  margin-bottom: 2px;

  &:hover {
    opacity: 0.8;
  }
`;
export const EditButton = styled.button`
  background: blue;
  border-radius: 10px;
  color: white;
  padding: 5px 7px;
  cursor: pointer;
  font-size: 20px;
  width: 80px;  
  height: 40px; 
  margin-bottom: 2px;

  &:hover {
    opacity: 0.8;
  }
`;
export const YesButton=styled.button`
  background: green;
  border-radius: 10px;
  color: white;
  padding: 5px 7px;
  cursor: pointer;
  font-size: 16px;
  width: 80px;  
  height: 40px; 
  margin-bottom: 2px;

  &:hover {
    opacity: 0.8;
  }

`;

export const ConfirmContainer = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin-top: 5px; 
  margin-left:50px;
  width: 300px;
  height: 100px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  justify-content: center; /* Optional: Centers content vertically */
  align-items: center; /* Optional: Centers content horizontally */
`;
export const ConfirmMessage=styled.p`
font-weigth:bold;
font-size:15px;
`;