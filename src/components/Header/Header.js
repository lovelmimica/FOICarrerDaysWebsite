import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imges/logo.png';
import './Header.scss';

const links = {
    speakers: 'Sudionici',
    events: 'Događanja',
    contact: 'Kontakt',
    login: 'Prijavi se'
}

const Header = () => {
    return (
        <header className="HeaderMain">
            <div className="HeaderMain-Container">
                <Link to="/" className="HeaderMain-LogoContainer">
                    <img className="HeaderMain-Logo" src={Logo} alt="Logo" />
                </Link>
                <nav className="HeaderMain-Nav">
                    <ul className="HeaderMain-NavList">
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/events">{links.events}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/speakers">{links.speakers}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/">{links.contact}</Link>
                        </li>
                        <li className="HeaderMain-NavListItem">
                            <Link className="HeaderMain-NavLink" to="/">{links.login}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;