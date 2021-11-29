import React from 'react';
import activeNavbar from './ActiveNavbar';
import ScrollToTop from '../ScrollToTop';


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
                    <a href="#page-two-WeatherApp">
                        <span className='number'> 2 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-three-Batman">
                        <span className='number'> 3 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-four-TodoList">
                        <span className='number'> 4 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-five-ScreenResolution">
                        <span className='number'> 5 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-six-QuoteGenerator">
                        <span className='number'> 6 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-seven-ColorGenerator">
                        <span className='number'> 7 </span>
                    </a>
                </li>
            </ul>
            <ScrollToTop />
        </div>
    );
};


export default Navbar;
