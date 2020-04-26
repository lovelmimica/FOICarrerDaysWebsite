import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    justify-content: center;
`;

export const Grid = styled.div`
        @media (min-width: 700px){
            display: grid;
            max-width: 1024px;
            grid-template-columns: 33% 33% 33%;
        }
        @media (max-width: 700px){
            display: grid;
            grid-template-columns: 50% 50%;
        }
        @media (max-width: 400px){
            display: grid;
            grid-template-columns: 100%;
        }
`;