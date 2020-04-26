import React from 'react';
import {Container, Data, Title, Host, Dates, ApplyButton} from './HeroSectionStyle.js';

const HeroSection = () => {
    return(
        <section>
            <Container>
                <Data>
                    <Title>Tjedan karijera</Title>
                    <Host>FOI</Host>
                    <Dates>20.10.2020. - 16.10.2020.</Dates>
                    <ApplyButton href="#">PRIJAVI SE</ApplyButton>
                </Data>
            </Container>
        </section>
    );
}

export default HeroSection;