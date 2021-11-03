import React from 'react';
import TsParticlesBackground from '../ParticlesJS/TsParticlesBackground';
// import ReactParticlesJSBackground from '../ParticlesJS/ReactParticlesJSBackground';
import ScrollDown from '../Utility/ScrollDown';
import TypewritingFunc from '../Typewriting/TypewritingFunc';


const Hero = () => {

    TypewritingFunc();

    return (
        <div id='01' className='Page Hero'>
            <TsParticlesBackground />
            {/*<ReactParticlesJSBackground />*/}

            <div className='hero-text'>
                <h1> Hello.&nbsp;</h1>
                {/*<h1 className='typewriting'> &nbsp; </h1>*/}
            </div>

            <ScrollDown />
        </div>
    );
};


export default Hero;
