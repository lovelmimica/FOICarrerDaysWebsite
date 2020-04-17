import React from 'react';
import './SpeakersContainer.scss';

//Components
import InfoBox from '../InfoBox/InfoBox';

//Images
import ImgSpeakerIcon from '../../assets/imges/speakers-icon.png'; 
import InfoBoxContainer from '../InfoBoxContainer/InfoBoxContainer';

const SpeakersContainer = () => {
    return(
        <section>
            <h2 className="SpeakersContainer-Title">Sudionici</h2>
            <InfoBoxContainer>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="John Bach" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="Sebastian Bach" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="Johan Franck" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="Johan Speck" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="Joe Boe" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                            imageTitle={ImgSpeakerIcon} 
                            altTitle="Speaker Icon" 
                            title="El Bow" 
                            excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                            joinBtnLabel="Prati sudionika">                        
                </InfoBox>                    
            </InfoBoxContainer>
        </section>
    );
}

export default SpeakersContainer;