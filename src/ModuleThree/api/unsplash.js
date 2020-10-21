import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID onFUPdeFBPSwKj_XfGi7pQolvW_Mi062bY3M5V_VSgs'
    }
});

