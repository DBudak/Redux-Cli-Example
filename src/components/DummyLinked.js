import React, {Component} from 'react';

class DummyLinked extends Component {

    render() {
        return (
            <div className="main-wrapper">
                Data Fetched From Server:
                <button onClick={this.props.fetchServer.bind(null,'http://date.jsontest.com')}>
                    Fetch Data From Server</button>
                    <br/>
            </div>
        );
    }
}

export default DummyLinked;