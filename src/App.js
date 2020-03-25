import React, {Component} from 'react';
import Head from './Head';
import Body from './Body';
import Footer from './Footer';


class App extends Component {
    render() {
        return(
            <div className="App">
                <h1>Hello!</h1>
                <Head />
                <Body />
                <Footer />
            </div>
        );
    }
}
  
export default App;