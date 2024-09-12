import styled from "@emotion/styled";
export const UploadContainer=styled.div`
width: 400px;
  display: flex;
  flex-direction: row; 
    grid-template-columns: 6fr 4fr;
  box-shadow: 1px 1px 25px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background-color: #f9f9f9;
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

export const InputField = styled.input`
width: 100%;
padding: 8px;
margin: 10px 0;
border: 1px solid #ccc;
border-radius: 4px;
align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 15px 5px;
  margin-top: 20px;
  color: white;
  background-color: #8aaae5;

`;
export const InputFieldSearch = styled.input`
width: 60%;
padding: 8px;
margin: 5px 0;
border: 1px solid #ccc;
border-radius: 4px;
align-items: center;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 15px 5px;
  margin-top: 20px;
  color: white;
  background-color: #8aaae5;

`;
export const UploadButton = styled.input`
background-color: green; /* Green */
color: white;
padding: 10px 15px;
border: none;
border-radius: 4px;
cursor: pointer;

&:hover {
  background-color: #45a049;
}
`;
export const Title=styled.h2`
text-align:center;
`