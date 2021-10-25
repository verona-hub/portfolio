import React from 'react';
// import Particles from 'react-particles-js';
import Particles from "react-tsparticles";
import ReactParticlesJSConfig from './ReactParticlesJSConfig';

const ReactParticlesJSBackground = () => {
    return (
            <Particles
                id="tsparticles"
                params={ ReactParticlesJSConfig }
                className='test'
            />
    );
};

export default ReactParticlesJSBackground;
