import React from 'react';
import {Section, Grid} from './InfoBoxContainerStyle.js';

const InfoBoxContainer = (props) => {
    return(
        <Section>
            <Grid>
                {props.children}
            </Grid>
        </Section>
    );
}

export default InfoBoxContainer;