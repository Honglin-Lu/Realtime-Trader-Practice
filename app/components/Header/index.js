import React from 'react';
import { FormattedMessage } from 'react-intl';

import NavBar from './NavBar';
import messages from './messages';
import styled from 'styled-components';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { SiMarketo } from "react-icons/si";


const Logo = styled.div`
  margin-right: auto;
  font-weight: bold;
  font-size: 2rem;
`;

const ThemeSwich = styled.div`
  background-color: bisque;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.8rem;
  width: 1.8rem;
  background-color: #2f3542;
  color: #d8d4ea;
  border-radius: 50%;
`;

const AvatarAndName = styled.div`
  border-left: 1px solid #353b49;
  padding-left: 20px;
`;

const Avator = styled.img`
  border-radius: 15%;
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: bold;
  font-size: 1rem;
`;


function Header() {
  return (
    <div className="aaaa">
      <NavBar>
        <Logo>
           <SiMarketo />&nbsp;Logo
        </Logo>
        <ThemeSwich>
          <BsFillMoonStarsFill />
        </ThemeSwich>

        <AvatarAndName>
          <Avator src="https://i.pravatar.cc/30" />
          <Username>Lauranne</Username>
        </AvatarAndName>

        {/*<HeaderLink to="/">*/}
        {/*  <FormattedMessage {...messages.home} />*/}
        {/*</HeaderLink>*/}
        {/*<HeaderLink to="/features">*/}
        {/*  <FormattedMessage {...messages.features} />*/}
        {/*</HeaderLink>*/}
      </NavBar>
    </div>
  );
}

export default Header;
