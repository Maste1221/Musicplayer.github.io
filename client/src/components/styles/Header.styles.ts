import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Define Emotion CSS for the header
export const headerCss = css`
  background-color: lightgrey; 
  padding: 16px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3); 
`;

export const StyledHeader = styled.header`
  ${headerCss}
`;

export const StyledToolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const StyledTypography = styled.h1`
  margin: 0;
  color: black;
  text-align: center; 
  flex: 1; 
`;

// Define a styled button
export const StyledButton = styled.button`
  background: green;
  border-radius:10px ;
  color: white;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`;
