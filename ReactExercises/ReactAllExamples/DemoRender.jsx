import React from 'react';
export default class App extends React.Component{
    render(){
        return(
            <div>
               <form>
                   <table>
                   <tr>
                       <td>Name</td>
                       <td><input type="text"></input></td>
                   </tr><tr>
                       <td>password</td>
                       <td><input type="password"></input></td>
                   </tr>

                    <tr>
                       <td><input type="submit"></input></td>
                   </tr>
                   </table>
               </form>
            </div>
        );
    }
}