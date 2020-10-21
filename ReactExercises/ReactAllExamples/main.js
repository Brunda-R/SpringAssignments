import React from 'react';
import ReactDOM from 'react-dom';
import App from './DemoRender.jsx';
import Greeting from './Greetings.jsx';
import App2 from './RendersComponent.jsx';
// import Technologies from './Technologies.jsx';
//import Technologies from './DisplayTechnologies.jsx';
import App5 from './stocks1.jsx';

ReactDOM.render(
    <App5 />,
    document.getElementById('app')
  );
//  ReactDOM.render(<Component1/>,document.getElementById("app"));
//  setTimeout(() => {
//     ReactDOM.unmountComponentAtNode(document.getElementById('app'));
// }, 10000);
// setInterval(function(){
// var messages = ["Hello User","Good Morning User","Good luck user"];
// var randommessage = messages[Math.floor((Math.random() * 3))];
// ReactDOM.render(<Greeting message={randommessage }/>,document.getElementById("greetings"));
// },500);
//  ReactDOM.render(<App2/>,document.getElementById("app2"));
