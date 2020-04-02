import React from 'react';

const NavItems = props => {
  return(
    <li>
    {props.items.join(' | ')}
    </li>
    );
  }

class App extends React.Component {
  render() {        
      return(
        <section>
        <ul>
        <NavItems items={['HOME','ABOUT','OUR WORK','SERVICES']} />
        </ul>
        </section>
        );
      }
    }
    
    export default App;