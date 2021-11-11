
const activeNavbar = () => {

    // Fix for page not resetting url on refresh
    const performanceNavigation = performance.getEntriesByType('navigation')[0].type;
    const forceHomepage = () => window.location.href = '/';

    performanceNavigation === 'reload' && forceHomepage();


    setInterval(() => {
        const pathInView = window.location.pathname;
        const allLinks = document.querySelectorAll('a');
        const menuItem = Array.from(allLinks);

        menuItem.forEach( item => {

            // Functions that toggle the active class
            const lightON = () => item.classList.add('active');
            const lightOFF = () => item.classList.remove('active');

            // Item href: replaced '#' with '/' so that it matches the window.location.pathname format ('/')
            const fullHref = item.attributes.href.value;
            const itemHref = '/' + fullHref.slice(1);

            // Homepage
            const hrefIsHome = (itemHref === '/page-one');
            const pathIsHome = (pathInView === '/');
            const homepage = hrefIsHome && pathIsHome;

            // Default for non active
            lightOFF();

            // Turn on the light on the current page;
            itemHref === pathInView && lightON();
            // for homepage had to add it separately because path='/' and href='/page-one' were unmatching
            homepage && lightON();
        });
    });
}


export default activeNavbar;