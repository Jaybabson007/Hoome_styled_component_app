import styled from "styled-components";

export const NavWrapper = styled.div`
    padding: 27px 0px;
    background: #FFFCF0;
    width: 100%;
    position: fixed;
    z-index: 100;

    .menu-icon{
        display: none;
        position: absolute;
        right: 0px;
    }

    .show{
        display: block;
    }
    .show-btn{
        display: flex;
        gap: 12px;
    }

    @media (max-width:768px) {
        .menu-icon{
        display: block;
    }
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width:768px) {
     flex-direction: column;
     align-items: flex-start;
   }
`;

export const Menu = styled.div`
   li{
    display: inline;
    padding: 0px 15px;
   }

   a{
    color: #000;
    text-transform: capitalize;
   }
   @media (max-width:768px) {
    display: none;
    ul{
            margin: 0px;
            padding: 0px;
    }
    li{
        padding: 20px 0px;
        display: block;
    }
   }
`;

export const BtnGroup = styled.div`
    display: flex;
    @media (max-width:768px) {
    display: none;
    flex-direction: column;
   }
`;