import React from 'react';
import './InfoBoxContainer.scss';

const InfoBoxContainer = (props) => {
    return(
        <section className="InfoBoxContainer">
            <div className="InfoBoxContainer-Grid">
                {props.children}
            </div>
        </section>
    );
}

export default InfoBoxContainer;