import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assigment
        // to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we called setstate
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }

    render(){
        return( 
        <div>
            Location: { this.state.lat }
            <br />
            Error: { this.state.errorMessage }
        </div>);
    }
}

ReactDom.render(<App />, document.querySelector('#root'));