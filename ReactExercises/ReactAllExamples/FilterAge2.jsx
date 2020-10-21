import React from 'react'
export default class AgeFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            persons : [
                {
                    name:"Eshan",
                    age:10
                },
                {
                    name:"Tanish",
                    age:50
                },
                {
                    name:"Manish",
                    age:30
                },
                {
                    name:"CHiku",
                    age:40
                }
            ]
        };
    }
    render(){
        return (
            <div>           
            {this.state.persons.filter(person=>person.age>=30).map(filteredPerson=>(
                <li>
                    {filteredPerson.name}
                </li>
            ))} 
            </div>
        );
    }
}