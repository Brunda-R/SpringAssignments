import React from 'react';
import axios from 'axios';
export default class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            persons:[],
            newlist:[]
        }
        this.displayPersons=this.displayPersons.bind(this);
    }
    componentDidMount(){
        // const apiURL="https://api.github.com/users/hacktivist123/repos";
        // fetch(apiURL).
        // then((response)=>response.json()).
        // then((data)=>console.log(data));

        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(res=>{
            const persons=res.data;
            this.setState({persons,newlist:persons});
        })
        .catch(error=>{
            console.log(error);
        });
    }
    displayPersons(e){
        var curlist=[];
        var newlist=[];
        if(e.target.value !== ""){
            curlist=this.state.persons;
            newlist=curlist.filter(item =>{
                const lc = item.name.toLowerCase();
                const fc=e.target.value.toLowerCase();
                return lc.includes(fc);
            })
        }
        else{
            newlist = this.state.persons;
        }
        this.setState({newlist});
    }
    displayPersonsId(e){
        if(e.target.value!="")
        var newlist = this.state.persons.filter(item=>item.id==parseInt(e.target.value));
        else
        var newlist = this.state.persons;
        this.setState({newlist});
    }
    Blur(e){
        e.target.value="";
        this.setState({newlist:this.state.persons});
    }
    render(){
        return (
            <div>
                <br></br>
                Enter Name to search <br></br>
                <input type="text" name="name" onBlur={(e)=>this.Blur(e)} onChange={(e)=>this.displayPersons(e)}/>
                <br></br><br></br>
                Or Enter ID to search <br></br>
                <input type="text" name="id" onBlur={(e)=>this.Blur(e)} onChange={(e)=>this.displayPersonsId(e)}/>
                <br></br>
                <div>
                    <br></br>
                <table border="1px">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                {this.state.newlist.map((person,index)=>(
                    <tr key={index}>
                        <td>
                            {person.id}
                        </td>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                    </tr>
                ))}
                </table>
            </div>
        </div>
        );
    }
}