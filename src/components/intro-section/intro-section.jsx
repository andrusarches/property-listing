import React from 'react';

import './intro-section.scss';

const IntroSection = ({title}) => {
    return (
        <section className="intro">
            <div className="intro__wrapper content-wrapper">
                <h2 className="intro__heading">{title}</h2>   
            </div>                
        </section>
    );
};

export default IntroSection;