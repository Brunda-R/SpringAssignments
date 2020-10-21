import React from 'react';

const App1 = (props) => (
    <div>
        <p>Hello {props.name}</p><br/>
        <p>Your Id is {props.id}</p>
    </div>
);

App1.defaultProps ={
    name:'Anonymous',
    id:120
};

const App2 = () => {
    <h1>Welcome to DBS</h1>
}