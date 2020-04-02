import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Image = (props) => {
  return (
    <img src={props.src} />
  )
}

class Button extends React.Component {
  render(){
    return(
      <button>button</button>
    );
  }
}

class Root extends React.Component {
  render(){
    return(
      <div className="container">
        <Button />
        <Image src="https://placekitten.com/1920/1080" />
      </div>
    );
  }
}

ReactDOM.render(
  <Root />, 
  document.getElementById('root')
);