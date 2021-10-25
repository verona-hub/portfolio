import React from 'react';
import Particles from "react-tsparticles";
import ReactParticlesJSConfig from './ReactParticlesJSConfig';


const ReactParticlesJSBackground = () => {
    return (
        <div className="react-particles-js-wrapper">
            <Particles
                id="tsparticles"
                params={ ReactParticlesJSConfig }
                className="react-particles"
            />
        </div>
    );
};


export default ReactParticlesJSBackground;
