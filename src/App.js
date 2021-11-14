import React, { Component }  from "react";
import ScrollableSection  from 'react-update-url-on-scroll';

// Components
import Navbar from './components/Utility/Navbar/Navbar';
import PageOne from './components/Pages/PageOne';
import PageTwo from "./components/Pages/PageTwo";
import PageThree from "./components/Pages/PageThree";
import PageFour from "./components/Pages/PageFour";
import PageFive from './components/Pages/PageFive';
import PageSix from './components/Pages/PageSix';


class App extends Component {

    render() {

        return(

            <div className='App'>
                <Navbar/>
                <div className="pages-wrapper">
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
                </div>
            </div>
        );
    }
}


export default App;
