import React from 'react';
import {CardBody, CardFigure, CardImage, CartTitle} from './CardStyle.js';

const Card = (props) => {
    return(
        <CardBody href='#' className="Card">
            <CardFigure className="Card-Figure">
                <CardImage className="Card-Image" src={props.image} alt={props.lat} />
            </CardFigure>
            <CartTitle className="Card-Title">{props.children}</CartTitle>
        </CardBody>
    );
}

export default Card;