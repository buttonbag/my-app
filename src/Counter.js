import React from 'react'

class Counter extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        count: 0
      };
      this.plusOne = this.plusOne.bind(this);
      this.minusOne = this.minusOne.bind(this);
    }
  
    plusOne() {
      this.setState(state => ({
        count: state.count +1
      }));
    }
    
    minusOne() {
      this.setState(state => ({
        count: state.count -1
      }));
    }
  
    render(){
      return(
        <div className="counter">
          <button onClick={this.minusOne}>-</button>
          <h1>{this.state.count}</h1>
          <button onClick={this.plusOne}>+</button>
        </div>
      );
    }
  }

  export default Counter;