import React, {Component} from 'react';

import { Link } from 'react-router';

class Main extends Component {

    constructor(){
        super();
    }

    componentDidMount(){
        
    }

    render() {
        return (
            <div className="main-wrapper">
                <Link to="/">
                    Home
                </Link>
                <Link to='/dummy'>
                    Dummy Linked
                </Link>
                <div className="presentation">
                    {React.cloneElement(this.props.children, this.props)}
                </div>                
            </div>
        );
    }
}

export default Main;