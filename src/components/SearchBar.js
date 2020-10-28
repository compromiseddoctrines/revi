import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        onFormSubmit(term);
    };

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>
                        Search for Videos
                    </label>
                    <input 
                        type="text" 
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        placeholder="Press Enter after search"
                    />
                </div>
            </form>
        </div>
    );

}


export default SearchBar