import React from 'react';
import ParticlesJS from '../Utility/ParticlesJS/ParticlesJS';
import ScrollDown from '../Utility/ScrollDown';
import TypewritingFunc from '../Utility/Typewriting/TypewritingFunc';


const PageOne = () => {

    // Activates the typewriting effect
    TypewritingFunc();

    return (
        <div id='page-one' className='Page Hero'>

            <ParticlesJS />

            <div className='hero-text'>
                <h1> Hello.&nbsp;</h1>
                <h1 className='typewriting'> &nbsp; </h1>
            </div>

            <ScrollDown />
        </div>
    );
};


export default PageOne;
