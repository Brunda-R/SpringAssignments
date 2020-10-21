import React from 'react';
import ReactDOM from 'react-dom';

class App5 extends React.Component{
    constructor(props){

        super(props)
        this.incval = this.incrementValue.bind(this);
    }
    incrementValue (){
        console.log(this.refs);
        this.refs.Inc.value++;
        // ReactDOM.findDOMNode(this.refs.Inc).value++;
    }
    render(){
        return (<div>
            <input type="text" ref="Inc" value="0"></input>
            <button onClick={this.incval}>Increment</button>

        </div>);
    }
}

export default App5;