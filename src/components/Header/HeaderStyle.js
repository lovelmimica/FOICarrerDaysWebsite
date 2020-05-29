import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';

export const HeaderMain = styled.header`
    position: sticky;
    top: 0;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: white;       
`;

export const LogoLink = styled.a`
    width: 80px;
    height: 70px;
`;


export const LogoImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;    
`;

export const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    align-items: center;
`;

export const NavItem = styled.li`
    margin-right: 50px;

    &:last-child{
        margin-right: 0px;
    }

`;

export const NavItemLink = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: 17px;
    font-weight: 700;
    
    &:hover {
        color: red; 
        transition: 1s color;        
    }

    &.active{
        color: pink;
    }
`;

export const Logout = styled.li`
    color: white;
    font-size: 17px;
    font-weight: 700;
    display: flex; 
    align-items: center;
    background-color: darkred;
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
`;