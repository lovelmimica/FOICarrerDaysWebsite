import React, { useEffect, useState } from 'react';
import SpeakersData from '../../lib/speakers.js';
import {Title} from './SpeakersConteinerStyle.js';


//Components
import InfoBox from '../InfoBox/InfoBox';
import SearchBar from '../SearchBar/SearchBar';
import LoaderContainer from '../LoaderContainer/LoaderContainer';
import InfoBoxContainer from '../InfoBoxContainer/InfoBoxContainer';

//Images
import ImgSpeakerIcon from '../../assets/imges/speakers-icon.png'; 

const SpeakersContainer = (props) => {
    const [downloadFinished, setDownloadFinished] = useState(false);
    const [speakers, setSpeakers] = useState(0);
    const [allSpeakers, setAllSpeakers] = useState(SpeakersData);

    useEffect(() => {
        //TOD: Fetch real data
        setTimeout(() =>{
            console.log("Download finished");
            setSpeakers(SpeakersData);
            setDownloadFinished(true);
        }, 1000);
    }, []);

    const searchSpeakers = (query) => {
        let filteredSpeakers = new Array();
        allSpeakers.forEach(element => {
            if(element.title.toLowerCase().includes(query.toLowerCase())){
                filteredSpeakers.push(element);
            }
        });
        setSpeakers(filteredSpeakers);
    }

    return(
        <>
        {downloadFinished == false ?
            <section>
                <Title>Sudionici</Title>
                <SearchBar placeholder='Pretraži sudionike...' doSearch={searchSpeakers} disabled='true' />
                <LoaderContainer />
            </section>
        :
            <section>
                <Title>Sudionici</Title>
                <SearchBar placeholder='Pretraži sudionike...' doSearch={searchSpeakers} />
                <InfoBoxContainer>
                    {speakers.map((speaker, index) => (
                        <InfoBox 
                        key={index}
                        imageTitle={ImgSpeakerIcon} 
                        altTitle="Speaker Icon" 
                        title={speaker.title}
                        excerpt={speaker.about}
                        joinBtnLabel="Prati sudionika" >
                    </InfoBox>     
                    ))}  
                </InfoBoxContainer>
            </section>
        }
        </>
    );
}

export default SpeakersContainer;