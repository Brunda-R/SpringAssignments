import React from 'react';

export default class SignUp extends React.Component{
    render(){
        const mystyle={
            color:"Red",
            background:'#f1f1f1',
            borderRadius:"10",
            fontFamily:"Arial"
        };
        return (
            <div style={{backgroundColor:'#ffcccb',width:"350px",height:"200px",borderRadius:"5px",textAlign:"center"}}>
               <h3 style={{color:"red"}}>Enter your credentials to SignUp</h3>
    <table>
      <tr>
        <td>Enter username</td>  
        <td><input type="text" style={mystyle}/></td>
      </tr>
      <tr>
        <td>Enter email</td>  
        <td><input type="email" style={mystyle}/></td>
      </tr>
      <tr>
        <td>Enter password</td>  
        <td><input type="password" style={mystyle}/></td>
      </tr>
    </table>
    <br></br>
    <button style={{color:"red"}}>Submit</button>
            </div>
                );
    }
}
    
    

