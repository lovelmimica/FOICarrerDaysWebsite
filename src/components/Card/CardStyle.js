import styled from 'styled-components';

export const CardBody = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-width: 300px;
    height: auto;
    padding-top: 15px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    border-radius: 15px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: 1s box-shadow;
    text-decoration: none;
    margin-top: 15px;

    &:hover{
        box-shadow: 0 10px 30px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.24);
        transition: 1s box-shadow;
    }
`;

export const CardFigure = styled.figure`
    height: 250px;
    width: 100%;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const CartTitle = styled.p`
    color: black;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
`;