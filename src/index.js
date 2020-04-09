import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import ControlledInput from './ControlledInput';
import RPS from './RPS';

class App extends React.Component {
  render(){
    return(
      <div className="container">
        {/* counter */}
        <Counter />
        {/* controlled input */}
        <ControlledInput />
        {/* build a rock, paper, scissor game */}
        <RPS />
      </div>
  )}
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);