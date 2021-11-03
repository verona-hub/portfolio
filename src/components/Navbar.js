import React from 'react';


const Navbar = () => {
    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <a href="#page-1" className='active'>
                        <span className='number'> 1 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-2">
                        <span className='number'> 2 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-3">
                        <span className='number'> 3 </span>
                    </a>
                </li>
                <li>
                    <a href="#page-4">
                        <span className='number'> 4 </span>
                    </a>
                </li>
            </ul>
        </div>
    );
};


export default Navbar;
