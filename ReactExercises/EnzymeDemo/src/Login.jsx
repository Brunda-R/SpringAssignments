import React from "react";
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            password:'',
            result:''
        }
        this.submit=this.submit.bind(this);
        this.nameChange=this.nameChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
    }
    nameChange(e){
        this.setState({
            name:e.target.value
        });
    }
    passwordChange(e){
        this.setState({
            password:e.target.value
        });
    }
    submit(){

        var result='';
        if(this.state.name=='Brunda' && this.state.password=="123456")
            result='Success';
        else
            result="Failed";

            this.setState({
                result
            })
    }
    render(){
        return(
            <div>
                  Enter UserName:
                  <input type="text" onChange={this.nameChange} name="uname" value={this.state.name} /><br/>
Enter Name: <input type="password" onChange={this.passwordChange}  name="pwd" value={this.state.password}/><br/>
<input type="button" value="submit" onClick={this.submit}/><br/>
<p>{this.state.result}</p>
           </div>
        );
    }
}


