import React from 'react';
import activeNavbar from './ActiveNavbar';


const Navbar = () => {

    // Active color on navbar
    activeNavbar();

    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <a href="#page-one">
                        <span className='number'> 1 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-two">
                        <span className='number'> 2 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-three">
                        <span className='number'> 3 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-four">
                        <span className='number'> 4 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-five">
                        <span className='number'> 5 </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default Navbar;
