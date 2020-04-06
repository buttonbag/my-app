import React from 'react';

class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }

    render() {
      return (
        <div className="controlled-input">
          { /* value is added to update the input DOM element */}
          <input value={this.state.input} onChange={this.handleChange} placeholder='type something' />
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };

  export default ControlledInput;