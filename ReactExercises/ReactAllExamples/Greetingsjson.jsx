import React from 'react';
var config = require('./model/records.json');

const App = () => {
    return (
        <div>
            <h1>{config.greetText}</h1>
        </div>
    );
}

export default App;