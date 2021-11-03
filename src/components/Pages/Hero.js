import React from 'react';
import ParticlesJS from '../ParticlesJS/ParticlesJS';
import ScrollDown from '../Utility/ScrollDown';
import TypewritingFunc from '../Typewriting/TypewritingFunc';


const Hero = () => {

    // Activates the typewriting effect
    TypewritingFunc();

    return (
        <div id='page-1' className='Page Hero'>

            <ParticlesJS />

            <div className='hero-text'>
                <h1> Hello.&nbsp;</h1>
                <h1 className='typewriting'> &nbsp; </h1>
            </div>

            <ScrollDown />
        </div>
    );
};


export default Hero;
