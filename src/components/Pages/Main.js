import React from 'react';
import ScrollableSection  from 'react-update-url-on-scroll';


// Components
import PageOne from '../Pages/PageOne';
import PageTwo from "../Pages/PageTwo";
import PageThree from "../Pages/PageThree";
import PageFour from "../Pages/PageFour";
import PageFive from '../Pages/PageFive';
import PageSix from '../Pages/PageSix';
import PageSeven from '../Pages/PageSeven';
import PageEight from '../Pages/PageEight';


const MyComponent = () => {
    return (
        <div className="Main">
            <ScrollableSection name='/'>
                <div>
                    <PageOne/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-two-weather-app'>
                <div>
                    <PageTwo/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-three-batman'>
                <div>
                    <PageThree/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-four-todo-list'>
                <div>
                    <PageFour/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-five-screen-resolution'>
                <div>
                    <PageFive/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-six-quote-generator'>
                <div>
                    <PageSix/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-seven-color-generator'>
                <div>
                    <PageSeven/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-eight-game'>
                <div>
                    <PageEight/>
                </div>
            </ScrollableSection>
        </div>
    );
};


export default MyComponent;
