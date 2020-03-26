import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    
    return(
      <section>
        <h1>Hello</h1>
        <div className="Head">
          Head
          <ul>
            <li>{this.props.navItem1}</li>
            <li>{this.props.navItem2}</li>
            <li>{this.props.navItem3}</li>
          </ul>
        </div>
        <div className="Body">Body</div>
        <div className="Footer">Footer</div>
      </section>
    );
  }
}

App.defaultProps = { 
  navItem1: "item1",
  navItem2: "item2",
  navItem3: "item3"
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);