import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory,Link,browserHistory} from 'react-router'
import SignIn from './SignIn.jsx'
import SignUp from './SignUp.jsx'
import Employee from './Employee.jsx'
class App7 extends Component {
    render () {
        return (
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
                <IndexRoute component={Home} />
                <Route path='address' component={Address}>
                    <IndexRoute component={Instagram} />
                    <Route path='twitter' component={Twitter}/>
                </Route>
                <Route path='register' component={Register}>
                    <IndexRoute component={SignIn} />
                    <Route path='signup' component={SignUp}/>
                </Route>
                <Route path='employee' component={Employee}/>
                <Route path='about(/:name)' component={About}></Route>
                <Route path='*' component={NotFound} />
            </Route>
          </Router>
        )
      }
}
const About  = (props)=>(
  <div>
    <h2>About us</h2>
    <p>{props.params.name}</p>
  </div>
);

const Home = () => <h1>Hello from Home!</h1>
const Twitter = () => <h3>Feed from Twitter</h3>
const Instagram = () => <h3>Feed from Instagram</h3>


const Address = (props) => (
  <div>
    <h2>Address</h2>
    <Link activeStyle={{color:'#53acff'}} to='/address/twitter'>Twitter</Link>&nbsp;&nbsp;&nbsp;
    <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to="/address">Instagram</Link>&nbsp;&nbsp;&nbsp;
    {props.children}
  </div>
)

const Register = (props) => (
  <div>
    <h2>Register</h2>
    <Link  activeStyle={{color:'#53acff'}} to='/register'>Sign in</Link>&nbsp;&nbsp;&nbsp;
    <Link activeStyle={{color:'#53acff'}} to="/register/signup">Sign up</Link>&nbsp;&nbsp;&nbsp;
    {props.children}
  </div>
)
const NotFound=()=><h1> 404 ERROR PAGE NOT FOUND </h1>

const Nav = () => (
    <div>
      <Link onlyActiveOnIndex activeStyle={{color:'#53acff'}} to='/'>Home</Link>&nbsp;&nbsp;&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/address'>Address</Link>&nbsp;&nbsp;&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/register'>Register</Link>&nbsp;&nbsp;&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/employee'>Employee details</Link>&nbsp;&nbsp;&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/about'>About</Link>&nbsp;&nbsp;&nbsp;

    </div>
  )

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>
  


export default App7