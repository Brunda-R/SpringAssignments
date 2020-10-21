import React from "react";
class App extends React.Component{
    constructor(props){
        super(props);
       
    }
    render(){
        return(
            <div>
                <td> {this.props.name}</td><td>{this.props.id}</td><td>{this.props.salary}</td>
            </div>
        );
    }
}

export default App;