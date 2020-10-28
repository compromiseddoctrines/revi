import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {

    const [term, setTerm] = useState('nature');

    const onTermSearch = () => {props.onSubmit(term)};

    const onFormSubmit = (e) => {
        e.preventDefault();
        onTermSearch();
    }

    useEffect(() => {
        onTermSearch();
    },[]);

    return (
        <div className="ui segment">
            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <label>Search for an Image</label>
                    <div class="ui category search">
                        <div class="ui action input">
                            <input 
                                type="text" 
                                className="prompt"
                                value={term}
                                onChange={(e) => setTerm(e.target.value)}
                                placeholder="Type your input here" 
                            />
                            <button type="submit" className="ui button">
                                <i class="search icon search-icon"></i>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    );

}

export default SearchBar