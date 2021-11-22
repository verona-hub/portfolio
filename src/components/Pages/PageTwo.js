import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from '../../img/weather-app-screenshot.jpg';


const PageTwo = () => {

    const info = 'This app was made with Html, CSS, and ReactJS.';
    const info2 = 'A simple search input fetching data from a weather Api. The images change based on the returned data.';

    return (
        <div id='page-two-WeatherApp' className='Page page-two'>
            <ShowCase
                title='Weather App'
                image={ image }
                projectLink='https://app-weather-app.vercel.app/'
                projectInfo={ info }
                projectInfo2={ info2 }
                githubLink='https://github.com/verona-hub/weather-app'
            />
        </div>
    );
};

export default PageTwo;
