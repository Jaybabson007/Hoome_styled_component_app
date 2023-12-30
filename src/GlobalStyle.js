import { createGlobalStyle, styled } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        background: #FFFCF0;
        font-family: sora;
    }

    h1{
        font-size: 40px;
        text-transform: capitalize;
        margin: 0px;
    }

    h2{
        font-size: 32px;
        text-transform: capitalize;
        margin: 0px;
    }

    p{
        color: #575757;
    }
    a{
        text-decoration: none;
    }
`;

export const Container = styled.div`
    width: 85%;
    max-width: 1200px;
    margin: auto;
    position: relative;
`;

export const Row = styled.div`
  display: flex;
  gap: 40px;
  >div{
    flex:1;
  }
  @media(max-width: 768px){
    flex-direction: column;
  }
`;

export const SectionWrapper = styled.div`
    padding: 56px 0px;
`;


export default GlobalStyle;