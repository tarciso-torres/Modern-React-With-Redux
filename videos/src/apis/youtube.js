import axios from 'axios';

const KEY = 'AIzaSyDLwus-sLefrvGn5iAg5hEuIVpB6kKL0OM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});