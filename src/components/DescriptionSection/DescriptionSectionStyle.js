import styled from 'styled-components';

export const DescriptionContainer = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: {
            top: 40px;
            bottom: 60px;
        }
`;

export const DescriptionContent = styled.p`
        max-width: 750px;
        font-size: 18px;
        line-height: 150%;
        text-align: center;
`;

export const MoreInfoBtn = styled.a`
        background-color: #c59613;
        transition: 1s background-color;
        text-decoration: none;
        font: inherit;
        padding-left: 25px;
        padding-right: 25px;
        border-radius: 10px;
        line-height: 40px;
        font-weight: 700;
        color: white;

        &:hover{
            background-color: #c59613bd;
            transition: 1s background-color;
        }
`;