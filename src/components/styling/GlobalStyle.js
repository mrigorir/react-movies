import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  root: {
    --maxWitdh: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSamll: 1rem;
  }		
  
  * {
    box-sizing: border-box;
    font-family: 'Abel';
  }

  body {
    margin: 0;
    padding: 0;		  
  
    h1 {
      font-size: 2rem;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
    }

    h1, h3 {
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      color: var(--white);
    }
  }
`;

export default GlobalStyle;
