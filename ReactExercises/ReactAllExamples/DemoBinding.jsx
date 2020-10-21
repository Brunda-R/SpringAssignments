import React from 'react';
import ReactDOM from 'react-dom';

class App6 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            saying:''
        }
    }
    update(e){
        this.setState({saying:e.target.value});
    }
   
    render(){
        return (
        <div>
            Eshan Says <input type="text" onChange={this.update.bind(this)}></input>
            {/* Eshan Says <input type="text" onChange={(e)=>this.update(e)}></input> */}

            <br>
            </br>
            <h1>{this.state.saying}</h1>
        </div>
        
        );
    }
}
export default App6;