import React from 'react';

class SearchBar extends React.Component{

    state = {
        term: ''
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
                        <input 
                            type="text" 
                            value={this.state.term}
                            onChange={(e) => this.setState({term: e.target.value})}
                            placeholder="Press Enter to Search" 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar