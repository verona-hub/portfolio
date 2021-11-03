import React  from "react";
import Particles from "react-tsparticles";
import ParticlesJSConfig from "./ParticlesJSConfig";


const ParticlesJS = () => {
    return (
            <Particles
                id="tsparticles"
                options={ ParticlesJSConfig }
                className="ParticlesJS"
            />
    );
};


export default ParticlesJS;
