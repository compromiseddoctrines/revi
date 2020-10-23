import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS of front end developers'
    },
    {
        title: 'React Hooks',
        content: 'Use states, Use ref, etc..'
    }
];

class App extends React.Component{

    render(){
        return(
            <div>
                <Search />
            </div>
        );
    }
}

export default App