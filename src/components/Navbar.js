import React from 'react';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <a href="#01" className='active'>
                        <span className='number'> 1 </span>
                    </a>
                </li>
                <li>
                    <a href="#02">
                        <span className='number'> 2 </span>
                    </a>
                </li>
                <li>
                    <a href="#03">
                        <span className='number'> 3 </span>
                    </a>
                </li>
                <li>
                    <a href="#04">
                        <span className='number'> 4 </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
