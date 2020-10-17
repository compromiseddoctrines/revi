import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <h4>Warning</h4>
                Are you sure you want to do this?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Nancy" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice one"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Jon"
                    timeAgo="Today at 2:00AM" 
                    content="You are great"
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    avatar={faker.image.avatar()}
                    author="Bon"
                    timeAgo="Today at 5:00PM" 
                    content="Road to 80k"
                />
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));