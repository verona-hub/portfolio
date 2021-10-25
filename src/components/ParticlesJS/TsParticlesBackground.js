import React  from "react";
import Particles from "react-tsparticles";
import TsParticlesConfig from "./TsParticlesConfig";


const TsParticlesBackground = () => {
    return (
            <Particles
                id="tsparticles"
                options={ TsParticlesConfig }
                className="canvas"
            />
    );
};


export default TsParticlesBackground;
