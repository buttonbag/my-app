import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const Image = (props) => {
//   return (
//     <img src={props.src} />
//   )
// }

class Button extends React.Component {
  render(){
    return(
      <button>button</button>
    );
  }
}

class Root extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      count: state.count +1
    }))
  }
  
  render(){
    return(
      <div className="container">
        <button onClick={this.handleClick}/>
    <div>{this.state.count}</div>
        {/* <Image src="https://placekitten.com/1920/1080" /> */}
      </div>
    );
  }
}

ReactDOM.render(
  <Root />, 
  document.getElementById('root')
);