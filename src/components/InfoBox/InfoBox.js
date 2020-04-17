import React from 'react';
import './InfoBox.scss';


const InfoBox = (props) => {
    return(
        <div className="InfoBox">
             <div className="InfoBox-Title">
                <div className="InfoBox-IconContainer">
                    <img src={props.imageTitle} alt={props.altTitle} />
                </div>
                <span>{props.title}</span>
            </div>
            <div className="InfoBox-Content">{props.children}</div>
            <p className="InfoBox-Excerpt">{props.excerpt}</p>
            <div className="InfoBox-Footer">
                <a href="#" className="InfoBox-JoinBtn">{props.joinBtnLabel}</a>
            </div>
        </div>
    );
}

export default InfoBox;