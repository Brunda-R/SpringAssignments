import React from 'react';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                counter:0
            }
        this.handleClick=this.handleClick.bind(this);
        this.handleClickDec=this.handleClickDec.bind(this);

    }
    handleClick(){  
        this.setState((state,props)=>({
            counter:state.counter+1
        }));
    }
    handleClickDec(){  
        this.setState((state,props)=>({
            counter:state.counter-1
        }));
    }
    render(){
        return (
            <div>
                <Component1 counter={ this.state.counter } handleClick={ this.handleClick } handleClickDec={ this.handleClickDec }/>
                <Component2 counter={ this.state.counter } handleClick={ this.handleClick } handleClickDec={ this.handleClickDec }/>
                <Component3 counter={ this.state.counter } handleClick={ this.handleClick } handleClickDec={ this.handleClickDec }/>
            </div>
        );
    }
}
const Component1 = (props) => (
    <div>
        <h1>Count : {props.counter}</h1>
        <input type="button" value="Increment" onClick={ props.handleClick }/>
        <input type="button" value="Decrement" onClick={ props.handleClickDec }/>

    </div>
)
const Component2 = (props) => (
    <div>
        <h1>Count : {props.counter}</h1>
        <input type="button" value="Increment" onClick={ props.handleClick }/>
        <input type="button" value="Decrement" onClick={ props.handleClickDec }/>

    </div>
)
const Component3 = (props) => (
    <div>
        <h1>Count : {props.counter}</h1>
        <input type="button" value="Increment" onClick={ props.handleClick }/>
        <input type="button" value="Decrement" onClick={ props.handleClickDec }/>

    </div>
)
