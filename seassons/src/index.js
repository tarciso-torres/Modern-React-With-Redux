import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null};

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setstate
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    render(){
        return <div>Location: { this.state.lat }</div>
    }
}

ReactDom.render(<App />, document.querySelector('#root'));