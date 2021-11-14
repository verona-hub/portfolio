import React from 'react';
import ShowCase from './ShowCase/ShowCase';
import image from '../../img/weather-app-screenshot.png';


const PageTwo = () => {
    return (
        <div id='page-two-WeatherApp' className="Page page-two">
            <ShowCase
                title='Page 2 - Weather App'
                image={ image }
                projectLink='https://app-weather-app.vercel.app/'
                projectName='Weather App'
                projectInfo='This app was made with ReactJS.'
                githubLink='https://github.com/verona-hub/weather-app'
            />
        </div>
    );
};

export default PageTwo;
