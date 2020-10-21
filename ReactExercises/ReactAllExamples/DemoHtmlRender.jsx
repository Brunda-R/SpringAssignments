import React from 'react';
import htmlContent from './file1.html';
import './style.css'
const HtmlApp =()=>(
    <div dangerouslySetInnerHTML={{__html:htmlContent}}></div>
)
export default class App extends React.Component{
    render(){
        return(
            <div>
                <HtmlApp/>
            </div>
        );
    }
}