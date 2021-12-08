import React, { useState, useEffect  }  from 'react';


const ScrollToTop = () => {

    const scrollToTop = () => {
        document.getElementById('page-one').scrollIntoView({
            behavior: 'smooth'
        });
    };

    // State to determine if currently on first page or not
    const [ pageOne, isPageOne ] = useState(window.location.pathname === '/');

    useEffect(() => {

        const pageChecker = setInterval(() => {
            const pageOne = (window.location.pathname === '/');
            pageOne ? isPageOne(true) : isPageOne(false);
        }, 20);

        return () => {
            clearInterval(pageChecker);
        }
    });

    // If not on the first page, show the scroll to top icon
    return (
        !pageOne && (
            <div className='ScrollToTop' onClick={ scrollToTop }>
                <svg width="44" height="44" viewBox="0 0 24 24" stroke="#5CECBF" fill="none">
                    <path d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"/>
                </svg>
            </div>
        )
    );
};


export default ScrollToTop;
