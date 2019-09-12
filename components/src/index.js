import React from 'react';
import ReactDom from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 10:30AM" 
                    content="Nice blog post!"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Joe" 
                    timeAgo="Today at 12:30PM" 
                    content="I like the subject"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Monica" 
                    timeAgo="Yesterday at 11:30AM" 
                    content="I like the writting"
                    avatar={Faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDom.render(<App />, document.querySelector('#root'));