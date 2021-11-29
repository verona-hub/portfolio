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


const MyComponent = () => {
    return (
        <div className="Main">
            <ScrollableSection name='/'>
                <div>
                    <PageOne/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-two-WeatherApp'>
                <div>
                    <PageTwo/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-three-Batman'>
                <div>
                    <PageThree/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-four-TodoList'>
                <div>
                    <PageFour/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-five-ScreenResolution'>
                <div>
                    <PageFive/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-six-QuoteGenerator'>
                <div>
                    <PageSix/>
                </div>
            </ScrollableSection>
            <ScrollableSection name='page-seven-ColorGenerator'>
                <div>
                    <PageSeven/>
                </div>
            </ScrollableSection>
        </div>
    );
};


export default MyComponent;
