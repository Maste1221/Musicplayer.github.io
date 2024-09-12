import { css } from "@emotion/react";
import styled from "@emotion/styled";
export const update = css`
  background-color: lightgrey; 
  padding: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); 
`;

export const UpdateForm = styled.h1`
  ${update}
`;
export const UpdateConatiner = styled.div`
  position: absolute;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin-top: 5px; 
  margin-left:50px;
  width: 300px;
  height: auto; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  justify-content: center; /* Optional: Centers content vertically */
  align-items: center; /* Optional: Centers content horizontally */
`;
