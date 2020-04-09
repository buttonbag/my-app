import React from 'react';

class RPS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: '',
            count: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            select: event.target.value
        })
    }
    
    render() {
        return(
            <div className="RPS">
                <h1>R/P/S</h1>
                <select onChange={this.handleChange}>
                    <option value="rock">rock</option>
                    <option value="paper">paper</option>
                    <option value="scissor">scissor</option>
                </select>
                <div>
                    Human: {this.state.select}
                </div>  
                <p>vs</p>
                <div>
                    CPU:
                </div>  
            </div>
            );
        }
    }

export default RPS;