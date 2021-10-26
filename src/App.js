import React, { Component }  from "react";

// Components
import Navbar from './components/Navbar';
import PageOne from './components/Pages/PageOne';
import PageTwo from './components/Pages/PageTwo';
import PageThree from './components/Pages/PageThree';
import PageFour from './components/Pages/PageFour';
import ScrollDown from './components/Utility/ScrollDown';


class App extends Component {


    render() {
        // document
        //     .querySelector('.scrollToPageTwo')
        //     .scrollIntoView({ behavior: 'smooth' });

        return(
            <div className="App">
                <div className="pages-wrapper">
                    {/*<Navbar />*/}
                    <PageOne/>
                    {/*<ScrollDown />*/}
                    <PageTwo/>
                    <PageThree/>
                    <PageFour />
                </div>
            </div>

        );
    }
}


export default App;
