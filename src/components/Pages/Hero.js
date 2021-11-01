import React from 'react';
import TsParticlesBackground from "../ParticlesJS/TsParticlesBackground";
// import ReactParticlesJSBackground from '../ParticlesJS/ReactParticlesJSBackground';
import ScrollDown from '../Utility/ScrollDown';
import Typewriting from '../Typewriting/Typewriting';


const Hero = () => {

    return (
        <div className="Page Hero">
            <TsParticlesBackground />
            {/*<ReactParticlesJSBackground />*/}

            <div className="hero-text">
                {/*<h1 className="hero-h1"> Hello </h1>*/}
                <Typewriting />
            </div>

            <ScrollDown />
        </div>
    );
};


export default Hero;
