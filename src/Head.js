import React, {Component} from 'react';
// import Navigation from './head/Navigation';

class Navigation extends Component {
    render() {
        return(
            <ul className="navigation">
                <li className="navItem">navItem</li>
            </ul>
        );
    }
}

class Head extends Component {
    render() {
        return(
            <div className="Head">
                Head
                <Navigation />
            </div>
        );
    }
}

export default Head;