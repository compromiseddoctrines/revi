import React, { useState } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

const App = () => {

    const [images, setImages] = useState([]);

    const onSearchSubmit = async (term) => {

        const response = await unsplash.get('/search/photos',{
            params: {
                query: term
            }
        });

        setImages(response.data.results);
    };

    return (
        <div className="ui container" style={{ marginTop: '40px'}}> 
            <div class="ui two column centered grid">
                <p className="ui"> <span className="bold"> Project:</span> Unsplash API created with ReactJS, Hooks, Axios, Semantic UI & Grid  </p>
            </div>
            <br/>
            <SearchBar onSubmit={onSearchSubmit}/> 
            <br/>
            <ImageList images={images} />
        </div>
    );

}   

export default App