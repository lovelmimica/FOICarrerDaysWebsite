import React from 'react';
import {InfoBoxWrapper, Title, IconContainer, Icon, Content, Excerpt, Footer, JoinButton} from './InfoBoxStyle.js';

const InfoBox = (props) => {
    return(
        <InfoBoxWrapper>
             <Title>
                <IconContainer>
                    <Icon src={props.imageTitle} alt={props.altTitle} />
                </IconContainer>
                <span>{props.title}</span>
            </Title>
            <Content>{props.children}</Content>
            <Excerpt>{props.excerpt}</Excerpt>
            <Footer>
                <JoinButton href="#">{props.joinBtnLabel}</JoinButton>
            </Footer>
        </InfoBoxWrapper>
    );
}

export default InfoBox;