import React from 'react';
import "./CardContainer.scss";

const CardSection = (props) => {
    return(
        <section className="CardSection">
            <div className="CardSection-Container">
                {props.children}
            </div>
        </section>
    );
}

export default CardSection;