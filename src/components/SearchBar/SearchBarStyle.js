import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Input = styled.input`
        width: 400px;
        line-height: 50px;
        border: 1px solid #cecece;
        border-radius: 6px;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;

        &:focus{
            border-color: #c59613;
            border-radius: 6px;
        }
`;