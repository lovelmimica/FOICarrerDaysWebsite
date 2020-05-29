import React, { useEffect, useState } from 'react';
import EventsData from '../../lib/events.js';
import {EventTitle, EventDateTime, DateTimeImage} from './EventsContainerStyle.js';
import {getEvents} from '../../api/events';

//Components
import InfoBox from '../InfoBox/InfoBox';
import InfoBoxContainer from '../InfoBoxContainer/InfoBoxContainer';
import LoaderContainer from '../LoaderContainer/LoaderContainer';

//Images
import ImgCalendar from '../../assets/imges/event-icon.png';
import ImgLocation from '../../assets/imges/location-icon.png';
import ImgTime from '../../assets/imges/time-icon.png';
import SearchBar from '../SearchBar/SearchBar';

const EventsContainer = (props) =>{
    const [downloadFinished, setDownloadFinished] = useState(false);
    const [events, setEvents] = useState(0);
    const [allEvents, setAllEvents] = useState(0);
 
    useEffect(() => {
        getEvents(localStorage.getItem('bearerToken'))
            .then(res => {setEvents(res.events); setAllEvents(res.events)})
            .then(setDownloadFinished(true));
    }, []);

    const searchEvents = (query) => {        
        let filteredEvents = new Array();

        if(allEvents) allEvents.forEach(element => {
            if(element.title.toLowerCase().includes(query.toLowerCase())){
                filteredEvents.push(element);
            }
        });
        setEvents(filteredEvents);
    }

    return(
        <>
        {downloadFinished == false ?
        <section>
            <EventTitle>Događanja</EventTitle>
            <SearchBar placeholder='Pretraži događaje...' doSearch={searchEvents} disabled='true' />
            <LoaderContainer />
        </section>

        :
        <section>
            <EventTitle>Događanja</EventTitle>
            <SearchBar placeholder='Pretraži događaje...' doSearch={searchEvents} />
            <InfoBoxContainer>
                {events.map((event, index) => (
                    <InfoBox 
                        key={index}
                        imageTitle={ImgCalendar} 
                        altTitle="Event Icon" 
                        title={event.title}
                        excerpt={event.about}
                        joinBtnLabel="Prijavi se na predavanje">      
                            <EventDateTime >
                                <DateTimeImage src={ImgLocation} alt="Location Icon" />
                                <span>{event.location}</span>
                            </EventDateTime>
                            <EventDateTime>
                                <DateTimeImage src={ImgTime} alt="Location Icon" />
                                <span>{event.dateTime}</span>
                            </EventDateTime>                  
                    </InfoBox>
                ))}
            </InfoBoxContainer>
        </section>}
        </>
    );
}

export default EventsContainer;