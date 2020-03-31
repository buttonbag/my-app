import React, {Component} from 'react';

class App extends Component {
    render() {

      const NavItems = props => {
        return(
          <li className={props.name}>
            {props.content}
            <img src={props.img} alt=""/>
          </li>
        );
      }
      
      return(
        <section>
          <h1>Hello, Kitty</h1>
          <ul>
            <NavItems name='cat 1' img='http://placekitten.com/100' />
            <NavItems name='cat 2' img='http://placekitten.com/101' />
          </ul>
        </section>
      );
    }
  }

export default App;