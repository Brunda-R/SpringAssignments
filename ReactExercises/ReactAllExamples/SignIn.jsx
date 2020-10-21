import React from 'react';

export default class SignIn extends React.Component{
    render(){
        const mystyle={
            color:"Red",
            background:'#f1f1f1',
            borderRadius:"10",
            fontFamily:"Arial"
        };
        return (
            <div style={{backgroundColor:'#ffcccb',width:"350px",height:"150px",borderRadius:"5px",textAlign:"center"}}>
                <h3 style={{color:"red"}}>Enter your credentials to SignIn</h3>
                <table style={{width:"300px"}}>
                <tr>
                <td>Enter Username</td>  
                <td><input type="text" style={mystyle} /></td>
                </tr>
                <tr>
                <td>Enter Password</td>  
                <td><input type="password" style={mystyle} /></td>
                </tr>
            </table>
            <br></br>
            <button style={{color:"red"}} >Submit</button>
            </div>
                );
    }
}
    
    