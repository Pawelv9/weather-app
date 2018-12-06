import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class Application extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => { this.setState({
                            lat:
                              position.coords.latitude
                          });
                        },
            err => {
                this.setState({ errorMessage: err.message })
            }
            );
    }
    

    render () {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <div>Lat: {this.state.lat}</div>
        }

        return <div>Loading emojis..</div>
    }
}

ReactDOM.render(<Application />, document.querySelector('#root'))
