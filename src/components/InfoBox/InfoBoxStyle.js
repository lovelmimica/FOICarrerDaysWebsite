import styled from 'styled-components';

export const InfoBoxWrapper = styled.div`
    background-color: #efefef;
    border-radius: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    box-sizing: border-box;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
`;

export const Title = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 18px;
        font-weight: 600;

        & span{
            padding-left: 10px;            
        }
`;

export const IconContainer = styled.div`
        height: 100%;
`;

export const Icon = styled.img`
        height: 100%;
`;

export const Content = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-top: 10px;
        border-top: 1px solid #fff;
        
        &:empty{
            display: none;
        }
`;

export const Excerpt = styled.p`
        font-size: 15px;
        line-height: 150%;
        padding-top: 25px;
        padding-bottom: 25px;        
        border-bottom: 1px solid #fff;
        border-top: 1px solid #fff;
        text-align: center;
        margin-top: 0px;
`;

export const Footer = styled.div`
        text-align: center;    
`;

export const JoinButton = styled.a`
        text-decoration: none;
        color: black;
        font-size: 20px;
        transition: 1s color;

        &:hover{
            color: #58a510;
            transition: 1s color;            
        }
`;
