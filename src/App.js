import React, { Component }  from "react";


// Components
import Navbar from './components/Navbar';
import PageOne from './components/Pages/PageOne';
import PageTwo from './components/Pages/PageTwo';
import PageThree from './components/Pages/PageThree';
import PageFour from './components/Pages/PageFour';


class App extends Component {

    render() {

        return(
            <div className="App">
                <div className="pages-wrapper">
                    {/*<Navbar />*/}
                    <PageOne/>
                    <PageTwo/>
                    <PageThree/>
                    <PageFour />
                </div>
            </div>

        );
    }
}


export default App;
