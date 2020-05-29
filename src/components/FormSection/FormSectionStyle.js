import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    max-width: 350px;
`;

export const Title = styled.h2`
    font: inherit;
    font-weight: bold;
    margin-bottom: 40px;
    font-size: 25px;
`;

export const Message = styled(Link)`
    color: darkgoldenrod;
    text-decoration: none;
    font: inherit;
    font-size: 15px;
    font-weight: 600;
    width: 100%;
    text-align: center;
`;

export const Submit = styled.input.attrs({type: 'submit'})`
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    background-color: darkgoldenrod;
    border: 0.1px white;
    border-radius: 5px;
    height: 40px;
    font-size: 15px;
`;

export const Label = styled.p`
    font: inherit;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 0;
    font-size: 14px;
    margin-bottom: 5px;
    align-self: flex-start;
`;

export const TextInput = styled.input.attrs({type: 'text'})`
    width: 100%;
    margin-bottom: 20px;
    line-height: 30px;
    border: 1px solid grey;
    border-radius: 5px;
`;

export const Password = styled(TextInput).attrs({type: 'password'})`
    
`;

export const ErrorMessage = styled.span`
    font: inherit;
    color: red;
    font-size: 12px;
`;