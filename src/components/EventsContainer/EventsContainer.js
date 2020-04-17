import React from 'react';
import './EventsContainer.scss';

//Components
import InfoBox from '../InfoBox/InfoBox';
import InfoBoxContainer from '../InfoBoxContainer/InfoBoxContainer';

//Images
import ImgCalendar from '../../assets/imges/event-icon.png';
import ImgLocation from '../../assets/imges/location-icon.png';
import ImgTime from '../../assets/imges/time-icon.png';

const EventsContainer = () =>{
    return(
        <section>
            <h2 className="EventsContainer-Title">Događanja</h2>
            <InfoBoxContainer>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
                <InfoBox className="SpeakersContainer-InfoBox" 
                imageTitle={ImgCalendar} 
                altTitle="Event Icon" 
                title="How can we benefit from React Redux" 
                excerpt="Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one."
                joinBtnLabel="Prijavi se na predavanje">      
                    <div className="InfoBox-DateTime">
                        <img src={ImgLocation} alt="Location Icon" />
                        <span>Dvorana D09</span>
                    </div>
                    <div className="InfoBox-DateTime">
                        <img src={ImgTime} alt="Location Icon" />
                        <span>24.3. u 13:45h</span>
                    </div>                  
                </InfoBox>
            </InfoBoxContainer>
        </section>
    );
}

export default EventsContainer;