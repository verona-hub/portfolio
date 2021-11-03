import React, { Component }  from "react";

// Components
import Navbar from './components/Navbar';
import ShowCase from './components/Pages/ShowCase';
import Hero from './components/Pages/Hero';


class App extends Component {

    render() {

        return(
            <div className="App">
                <Navbar />
                <div className="pages-wrapper">
                    <Hero/>
                    <ShowCase />
                </div>
            </div>

        );
    }
}


export default App;
