import React from 'react';

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  }
  render() {
    return (
      <div className="controlled-input">
        <h1>Controlled input</h1>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type='submit'>Submit!</button>
        </form>
        { /* change code below this line */ }
        <h3>Output: {this.state.submit}</h3>
        { /* change code above this line */ }
      </div>
    );
  }
};


  export default ControlledInput;