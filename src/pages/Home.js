import React from 'react';

//Components
import Card from '../components/Card/Card';
import HeroSection from '../components/HeroSection/HeroSection';
import DescriptionSection from '../components/DescriptionSection/DescriptionSection';
import CardContainer from '../components/CardContainer/CardContainer';
import Footer from '../components/LastYearSection/LastYearSection';

//Images
import ImgAbout from '../assets/imges/about.jpg';
import ImgSpeakers from '../assets/imges/speakers.jpg';
import ImgAgenda from '../assets/imges/calendar.jpg';
import ImgPartner from '../assets/imges/partner.jpg';

const Home = () => {
    return(
        <div>
            <HeroSection />
            <DescriptionSection />
            <CardContainer>
                <Card image={ImgAbout} alt="About" >O tjednu karijera</Card>
                <Card image={ImgSpeakers} alt="Speakers" >Predavaci</Card>
                <Card image={ImgAgenda} alt="Agenda" >Raspored</Card>
                <Card image={ImgPartner} alt="Partners" >O tjednu karijera</Card>
            </CardContainer>
            <Footer/>
        </div>
    );
}

export default Home;