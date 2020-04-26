import React from 'react';
import Logo from '../../assets/imges/logo.png';
import {HeaderMain, HeaderContainer, LogoLink, LogoImage, NavList, NavItem, NavItemLink} from './HeaderStyle.js';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    contact: 'Kontakt',
    login: 'Prijavi se'
}

const Header = () => {
    return (
        <HeaderMain>
            <HeaderContainer >
                <LogoLink href="/" >
                    <LogoImage src={Logo} alt="Logo" />
                </LogoLink>
                <nav>
                    <NavList>
                        <NavItem>
                            <NavItemLink activeClassName='active' to="/events">{links.events}</NavItemLink>
                        </NavItem>
                        <NavItem>
                            <NavItemLink activeClassName='active' to="/speakers">{links.speakers}</NavItemLink>
                        </NavItem>
                    </NavList>
                </nav>
            </HeaderContainer>
        </HeaderMain>
    );
}

export default Header;