import React from 'react';


const Navbar = () => {

    setInterval(() => {
        const currentPage = window.location.href;
        const menuItem = document.querySelectorAll('a');
        const newMenuItem = Array.from(menuItem);

        newMenuItem.forEach(item => {
            item.classList.remove('active');
            if(item.href === currentPage) {
                item.classList.add('active');
            }
        });
    });


    return (
        <div className='Navbar'>
            <ul>
                <li>
                    <a href="#page-1">
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
