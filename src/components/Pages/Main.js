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

const pageOne = '/';
const pageTwo = 'page-two-WeatherApp';
const pageThree = 'page-three-Batman';
const pageFour = 'page-four-TodoList';
const pageFive = 'page-five-ScreenResolution';
const pageSix = 'page-six-QuoteGenerator';
const pageSeven = 'page-seven-ColorGenerator';

const MyComponent = () => {
    return (
        <div className="pages-wrapper">
            <ScrollableSection name= { pageOne }>
                <div>
                    <PageOne/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageTwo }>
                <div>
                    <PageTwo/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageThree }>
                <div>
                    <PageThree/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageFour }>
                <div>
                    <PageFour/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageFive }>
                <div>
                    <PageFive/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageSix }>
                <div>
                    <PageSix/>
                </div>
            </ScrollableSection>
            <ScrollableSection name={ pageSeven }>
                <div>
                    <PageSeven/>
                </div>
            </ScrollableSection>
        </div>
    );
};

export default MyComponent;
