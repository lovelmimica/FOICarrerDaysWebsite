import React from 'react';
import "./HeroSection.scss";

const HeroSection = () => {
    return(
        <section className="HeroSection">
            <div className="HeroSection-Container">
                <div className="HeroSection-Data">
                    <h3 className="HeroSection-Name">Tjedan karijera</h3>
                    <h4 className="HeroSection-Host">FOI</h4>
                    <p class="HeroSection-Dates">20.10.2020. - 16.10.2020.</p>
                    <a href="#" className="HeroSection-ApplyBtn">PRIJAVI SE</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;