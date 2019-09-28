import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 572e5261a1261effbb8ff7bf226f70147ce191484eb1846a3731526fba531b67'
    }
})