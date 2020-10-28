import React from 'react';

class SearchBar extends React.Component{

    state = {
        term: 'nature'
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search for Image with Unsplash API</label>
                        <div class="ui category search">
                            <div class="ui icon input">
                                <input 
                                    type="text" 
                                    className="prompt"
                                    value={this.state.term}
                                    onChange={(e) => this.setState({term: e.target.value})}
                                    placeholder="Press Enter to Search" 
                                />
                                <i class="search icon"></i>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar