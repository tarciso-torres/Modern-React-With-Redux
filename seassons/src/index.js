import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        // THIS IS THE ONLY TIME we do direct assigment
        // to this.state
        this.state = { lat: null, errorMessage: '' };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message})
        );
    }

    // React says we have to define render!!
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: { this.state.errorMessage } </div>
        }

        if(this.state.lat && !this.state.errorMessage){
            return <div>Location: { this.state.lat }</div>
        }

        return <div>Loading!</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));