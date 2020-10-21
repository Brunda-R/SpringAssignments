import React from "react";

const Greet = (props)=>
    <div>
        <h1>Welcome {props.name}</h1>
    </div>


class Greeting extends React.Component{
    render(){
        return(
            <div>
                   <h1> <mark>{this.props.message}</mark></h1>
                    <Greet name="user"/>
                
           </div>
        );
    }
}



export default Greeting;