import React, { Component } from "react";

// Components
import PageOne from './components/Pages/PageOne';
import PageTwo from './components/Pages/PageTwo';
import PageThree from './components/Pages/PageThree';

class App extends Component {

    render() {

        return(
            <div className="App">
                <PageOne />
                <PageTwo />
                <PageThree />
            </div>

        );
    }
}


export default App;
