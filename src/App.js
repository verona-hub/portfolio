import React, { Component }  from "react";
import ScrollableSection  from 'react-update-url-on-scroll';

// Components
import Navbar from './components/Utility/Navbar/Navbar';
import PageOne from './components/Pages/PageOne';
import PageTwo from "./components/Pages/PageTwo";
import PageThree from "./components/Pages/PageThree";
import PageFour from "./components/Pages/PageFour";


class App extends Component {

    render() {

        return(

            <div className='App'>
                <Navbar/>
                <div className="pages-wrapper">
                    <ScrollableSection name={'/'} className='test'>
                        <div>
                            <PageOne/>
                        </div>
                    </ScrollableSection>
                    <ScrollableSection name={'page-two'}>
                        <div>
                            <PageTwo/>
                        </div>
                    </ScrollableSection>
                    <ScrollableSection name={'page-three'}>
                        <div>
                            <PageThree/>
                        </div>
                    </ScrollableSection>
                    <ScrollableSection name={'page-four'}>
                        <div>
                            <PageFour/>
                        </div>
                    </ScrollableSection>
                </div>
            </div>
        );
    }
}


export default App;
