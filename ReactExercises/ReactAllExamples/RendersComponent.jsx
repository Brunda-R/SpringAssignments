import React from "react";
import App4 from "./DemoProps.jsx";
import App3 from "./DemoState.jsx";

class App extends React.Component{
    render(){
        return(
            <div>
                <p>Hello.This is simple statement from app2.jsx</p>
                <App3/>
                <table border="1px">
                    <tr><App4 name="John" id="123" salary="1234"/></tr>
                    <tr><App4 name="Jack" id="345" salary="1234"/></tr>
                    <tr><App4 name="Ben" id="999" salary="1234" /></tr>
                </table>
            </div>
        );
    }
}

export default App;