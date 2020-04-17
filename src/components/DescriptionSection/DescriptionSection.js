import React from 'react';
import "./DescriptionSection.scss";

const DescriptionSection = () =>{
    return(
        <section className="DescriptionSection">
            <div className="DescriptionSection-Container">
                <p className="DescriptionSection-Content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                <a href="#" className='DescriptionSection-MoreInfoBtn'>SAZNAJ VIŠE</a>
            </div>
        </section>
    );
}

export default DescriptionSection;