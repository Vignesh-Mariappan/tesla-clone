import React, { useState } from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  const [menuClick, setMenuClick] = useState(false);

  return (
    <HeaderContainer>
      <a>
        <img src='/images/logo.svg' alt='Tesla' />
      </a>

      <Menu>
        <a href='#'>Model S</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
        <a href='#'>Solar Roofs</a>
        <a href='#'>Solar Panels</a>
      </Menu>

      <Rightmenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <a href='#' onClick={() => setMenuClick(true)}>
          Menu
        </a>
      </Rightmenu>

      <RightSidePanelMenu style={{ transform: menuClick ? 'translateX(0px)' : 'translateX(100%)', backgroundColor: 'white' }}>
        <MenuCloser>
          <CloseIcon onClick={() => setMenuClick(false)}></CloseIcon>
        </MenuCloser>
        <ul>
          <li>
            <a href='#'>Existing Inventory</a>
          </li>
          <li>
            <a href='#'>Used Inventory</a>
          </li>
          <li>
            <a href='#'>Trade-In</a>
          </li>
          <li>
            <a href='#'>Test Drive</a>
          </li>
          <li>
            <a href='#'>Insurance</a>
          </li>
          <li>
            <a href='#'>Cybertruck</a>
          </li>
          <li>
            <a href='#'>Roadster</a>
          </li>
          <li>
            <a href='#'>Semi</a>
          </li>
          <li>
            <a href='#'>Charging</a>
          </li>
          <li>
            <a href='#'>Powerwall</a>
          </li>
          <li>
            <a href='#'>Commercial Energy</a>
          </li>
          <li>
            <a href='#'>Utilities</a>
          </li>
          <li>
            <a href='#'>Find Us</a>
          </li>
          <li>
            <a href='#'>Support</a>
          </li>
          <li>
            <a href='#'>Investor Relations</a>
          </li>
        </ul>
      </RightSidePanelMenu>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: bold;
    font-size: 14px;
    /* text-transform: uppercase; */
    padding: 0 10px;
  }

  @media (max-width: 925px) {
    display: none;
  }
`;

const Rightmenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-weight: bold;
    font-size: 14px;
    /* text-transform: uppercase; */
    padding: 0 10px;
  }

  @media (max-width: 925px) {
    flex: 1;
  }
`;

const RightSidePanelMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 310px;
  z-index: 100;
  transition: transform 0.5s ease-in;

  ul {
    list-style: none;
    margin-left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    li {
      margin-bottom: 1.5rem;
    }
  }
`;

const MenuCloser = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;
