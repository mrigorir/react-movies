import styled from 'styled-components';

const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin: 0 auto;
`;

const LogoImg = styled.img`
  width: 200px;
  
  @media screen and(max-width: 500px) {
    width: 150px;
  }
`;

const MoviesLogoImg = styled.img`
  width: 250px;
  
  @media screen and(max-width: 500px) {
    width: 150px;
  }
`;

export {
  Wrapper, Content, LogoImg, MoviesLogoImg,
};
