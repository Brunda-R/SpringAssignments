import React from 'react';
 
class App3 extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:123,
            name:"qwerty",
            salary:23400,
            date: new Date()
        };
    }
  handleClick() {
   alert(this); // null
  }
  render() {
    return (
        <div>
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            <button onClick={this.handleClick}>CLICK</button>
        </div>
      
    );
  }
}
 
export default App3;