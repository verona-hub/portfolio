import React, { Component }  from "react";

// Components
import Navbar from './components/Navbar';
import Main from './components/Main';
import Hero from './components/Hero';


class App extends Component {

    render() {

        return(
            <div className="App">
                <Navbar />
                <div className="pages-wrapper">
                    <Hero/>
                    <Main />
                </div>
            </div>

        );
    }
}


export default App;
