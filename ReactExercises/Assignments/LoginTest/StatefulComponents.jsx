import React from 'react';

class App1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                ...this.props,
                salary:12345
            }
    }
    render(){
        <div>
            <p>Hello {this.state.name}</p><br/>
            <p>Your Id is {this.state.id}</p><br/>
            <p>Yor Salary is {this.state.salary}</p>
        </div>
    }
}


export default class App2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            id:"",
            salary:"",
            Employees : []
        };
        this.addEmployee=this.addEmployee.bind(this);
        this.displayEmployees=this.displayEmployees.bind(this);
    }
    displayEmployees(){
        let items=this.state.Employees;
        return (
            <div>
                <table border="1px">
                {items.map((emp,index)=>{
                    return (<tr key={index}>
                        <td>{emp.name}</td>
                        <td>{emp.id}</td>
                        <td>{emp.salary}</td>
                    </tr>)
                })}
                </table>
            </div>
        );
       
    }
    setName(e){
        this.setState({
            name:e.target.value
        });
    }
    setID(e){
        this.setState({
            id:e.target.value
        });
    }
    setSalary(e){
        this.setState({
            salary:e.target.value
        });
    }
    addEmployee(){
        var emp = {
            name:this.state.name,
            id:this.state.id,
            salary:this.state.salary
        };
        var Employees=this.state.Employees;
        Employees.push(emp);
        console.log(emp);
        this.setState({Employees});
    }
    render(){
        return (
            <div>
                <table>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="ename" onChange={(e)=>this.setName(e)}></input></td>
                    </tr>
                    <tr>
                        <td>ID</td>
                        <td><input type="text" name="eid" onChange={(e)=>this.setID(e)}></input></td>
                    </tr>
                    <tr>
                        <td>Salary</td>
                        <td><input type="text" name="esalary" onChange={(e)=>this.setSalary(e)}></input></td>
                    </tr>
                </table>
                <input type="button" value="Add" onClick={this.addEmployee}></input>
                
                {this.displayEmployees()}
            </div>
        );
    }
}