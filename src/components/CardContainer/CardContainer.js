import React from 'react';
import {CardContainer} from './CardContainerStyle.js';

const CardSection = (props) => {
    return(
        <section>
            <CardContainer>
                {props.children}
            </CardContainer>
        </section>
    );
}

export default CardSection;