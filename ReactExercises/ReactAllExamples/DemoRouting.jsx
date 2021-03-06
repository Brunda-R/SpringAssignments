import React, { Component } from 'react'
import { Router, Route, IndexRoute,hashHistory} from 'react-router'
class App7 extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/address' component={Address} />
        <Route path="*" component={Notfound}/>
      </Router>
    )
  }
}
const Home = () => <h1>Hello from Home!</h1>
const Address = () => <h1>We are located at 555 Jackson St.</h1>
const Notfound = () => <h1>404 not found</h1>
export default App7