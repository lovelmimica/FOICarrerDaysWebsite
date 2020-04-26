import React from 'react';
import {Container, Content, Description} from './LastyearSectionStyle.js';

//Images
import ImgLastYear from '../../assets/imges/last-year.jpg';

const Footer = () =>{
    return(
        <section >
            <Container>            
                <h2>FOI tjedan karijera 2019</h2>
                <Content>
                    <Description>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</Description>
                    <img src={ImgLastYear} alt="Last Years" />
                </Content>
            </Container>
        </section>
    );
}

export default Footer;