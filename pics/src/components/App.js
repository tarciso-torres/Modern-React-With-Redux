import React from 'react';
import axios from 'axios';
import SeachBar from './SearchBar';

class App extends React.Component {

   state = { images: [] };

   onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                // colocar a chave
                Authorization: 'Client-ID 572e5261a1261effbb8ff7bf226f70147ce191484eb1846a3731526fba531b67'
            }
        });
        this.setState({ images: response.data.results });
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SeachBar onSubmit={this.onSearchSubmit} /> 
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;