import React from 'react';
import TsParticlesBackground from "../ParticlesJS/TsParticlesBackground";
import ReactParticlesJSBackground from '../ParticlesJS/ReactParticlesJSBackground';
import ScrollDown from '../Utility/ScrollDown';



const PageOne = () => {
    // document
    //     .querySelector('.scrollToPageTwo')
    //     .scrollIntoView({ behavior: 'smooth'
    // });


    return (
        <div className="Page page-one">
            <TsParticlesBackground />
            {/*<ReactParticlesJSBackground />*/}

            <h1 className="ts-h1"> Zoran G </h1>
            <ScrollDown />
        </div>
    );
};

export default PageOne;
