import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() =>{
        onTermSubmit(defaultSearchTerm);
    }, []);

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q: term,
             part: 'snippet',
             maxResults: 5,
             key: KEY
            } 
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return [videos, onTermSubmit];

};

export default useVideos;