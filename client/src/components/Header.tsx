import React from 'react';
import addis from '../assets/addis.jpeg'
import {
  StyledHeader,
  StyledToolbar,
  StyledTypography,
  StyledButton,
  Logo,
} from './styles/Header.styles';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledToolbar>
      <Logo src={addis} alt="Addis Software" />

        <StyledTypography >
          Song Management App
        </StyledTypography>
        <div>
          <StyledButton>music player</StyledButton>
          
        </div>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;
