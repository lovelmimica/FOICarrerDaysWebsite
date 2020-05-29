import React from 'react';
import Logo from '../../assets/imges/logo.png';
import {HeaderMain, HeaderContainer, LogoLink, LogoImage, NavList, NavItem, NavItemLink, Logout} from './HeaderStyle.js';
import { useHistory } from 'react-router-dom';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    register: 'Registracija',
    login: 'Prijavi se'
}

const Header = () => {
    let history = useHistory();

    const logOut = () => {
        localStorage.removeItem('bearerToken');
        history.push('/login');
    }

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
                        {localStorage.getItem('bearerToken')  
                        ? <Logout onClick={logOut}>Odjava</Logout>
                        :<>
                        <NavItem>
                            <NavItemLink activeClassName='active' to="/login">{links.login}</NavItemLink>
                        </NavItem>
                        <NavItem>
                            <NavItemLink activeClassName='active' to="/registration">{links.register}</NavItemLink>
                        </NavItem>
                        </>
                        }
                    </NavList>
                </nav>
            </HeaderContainer>
        </HeaderMain>
    );
}

export default Header;