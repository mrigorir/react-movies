import React from 'react';
import {
  Wrapper, Content, LogoImg, MoviesLogoImg,
} from './Header.styles';
import TMDBLogo from '../../images/tmdb_logo.svg';
import RMDBLogo from '../../images/react-movie-logo.svg';

function Header() {
  return (
    <Wrapper>
      <Content>
        <MoviesLogoImg src={RMDBLogo} alt="rmdb-logo" />
        <LogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
}

export default Header;
