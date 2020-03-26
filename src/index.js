import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Navigation = props => {
  return(
    <li>test</li>
    );
}

class App extends Component {
  render() {
    
    return(
      <section>
        <h1>Hello</h1>
        <div className="Head">
          <ul>
            <Navigation />
          </ul>
        </div>
        <div className="Body">Body</div>
        <div className="Footer">Footer</div>
      </section>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);