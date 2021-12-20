import React from 'react';
import activeNavbar from './ActiveNavbar';
import ScrollToTop from '../ScrollToTop';


const Navbar = () => {

    // Active color on navbar
    activeNavbar();

    return (
        <div className='Navbar'>
            <ul>
                {/* Added curly braces on anchors because of IDE warning "cannot resolve anchor" */}
                <li>
                    <a href={ '#page-one' }>
                        <span className='number'> 1 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-two-weather-app' }>
                        <span className='number'> 2 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-three-batman' }>
                        <span className='number'> 3 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-four-todo-list' }>
                        <span className='number'> 4 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-five-screen-resolution' }>
                        <span className='number'> 5 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-six-quote-generator' }>
                        <span className='number'> 6 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-seven-color-generator' }>
                        <span className='number'> 7 </span>
                    </a>
                </li>
                <li>
                    <a href={ '#page-eight-game' }>
                        <span className='number'> 8 </span>
                    </a>
                </li>
            </ul>

            <ScrollToTop />

        </div>
    );
};


export default Navbar;
