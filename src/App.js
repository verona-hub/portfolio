import React, { Component }  from "react";


// Components
import Navbar from './components/Utility/Navbar/Navbar';
import Main from './components/Pages/Main';

class App extends Component {

    render() {

        return(

            <div className='App'>
                <Navbar/>
                <Main />
            </div>
        );
    }
}


export default App;
