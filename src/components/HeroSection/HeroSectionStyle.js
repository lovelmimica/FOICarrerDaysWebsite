import styled from 'styled-components';
import img from "../../assets/imges/event.jpg";

export const Container = styled.div`
        display: flex;
        justify-content: center;
        background-position: center;
        background-image: url(${img});
        background-color: rgba(0, 0, 0, 0.69);
`;

export const Data = styled.div`
        padding: 15px 80px 15px 80px;
        background-color: rgba(255, 255, 255, 0.2);
        margin-top: 100px;
        margin-right: auto;
        margin-bottom: 100px;
        margin-left: auto;
        border-radius: 15px;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`;

export const Title = styled.h3`
        font-size: 30px;
        margin-bottom: 20px;
`;

export const Host = styled.h4`
        color: #c59613;
        font-size: 30px;
        margin-bottom: 10px;
        margin-top: 0px;
        font-weight: 500;   
`;

export const Dates = styled.p`
        font-size: 25px;
`;

export const ApplyButton = styled.a`
        background-color: #c59613;
        transition: 1s background-color;
        font: inherit;
        padding: 0px 25px 0px 25px;
        border-radius: 10px;
        line-height: 40px;
        font-weight: 700;
        text-decoration: none;
        color: white;
        
        &:hover{
            background-color: #c59613bd;
            transition: 1s background-color;            
        }
`;
