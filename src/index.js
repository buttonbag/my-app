import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';
import ControlledInput from './ControlledInput';

class App extends React.Component {
  render(){
    return(
      <div>
        {/* build a rock, paper, scissor game */}
        {/* counter */}
        <Counter />
        {/* controlled input */}
        <ControlledInput />
      </div>
  )}
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);