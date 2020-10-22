import React from 'react';
import Accordion from './components/Accordion';

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
                <Accordion items={items}/>
            </div>
        );
    }
}

export default App