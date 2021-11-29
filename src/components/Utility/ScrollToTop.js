import React  from 'react';


const ScrollToTop = () => {

    const homepage = (window.location.pathname === '/');
    console.log(homepage);

    const scrollToTop = () => {

        document.getElementById('page-one').scrollIntoView({
            behavior: 'smooth'
        });


    };

    // const scrollToTop = () => {
    //
    //     setInterval(() => {
    //
    //         if (homepage) {
    //             console.log(window.location.pathname)
    //         }
    //
    //     }, 2000);
    // };

    return (
        <div className='ScrollToTop' onClick={ scrollToTop }>
            <svg
                xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-top" width="44"
                height="44" viewBox="0 0 24 24" stroke="#5CECBF" fill="none"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path
                    d="M9 20v-8h-3.586a1 1 0 0 1 -.707 -1.707l6.586 -6.586a1 1 0 0 1 1.414 0l6.586 6.586a1 1 0 0 1 -.707 1.707h-3.586v8a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z"
                />
            </svg>
        </div>
    );
};


export default ScrollToTop;
