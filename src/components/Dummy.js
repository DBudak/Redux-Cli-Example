import React, {Component} from 'react';

class Dummy extends Component {

    render() {
        return (
            <div className="dummy-wrapper">
                Current props.number is {this.props.data.number}
                <button onClick={this.props.changeNumber.bind(null,this.props.data.number+1)}>
                    Increment Number
                </button>          
            </div>
        );
    }
}

export default Dummy;