import React from 'react';
import axios from 'axios';
import SeachBar from './SearchBar';

class App extends React.Component {
    onSearchSubmit(term) {
        console.log(term);
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SeachBar onSubmit={this.onSearchSubmit}/>            
            </div>
        );
    }
}

export default App;