import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Dashboard from "./components/dashboard/Dashboard"
import ProjectDetails from './components/projects/ProjectDetails'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'
import './App.css'

export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/project/:id' component={ProjectDetails}/>
            <Route path='/signin' component={SignIn}/>
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject}/>
          </Switch>     
        </div>
      </BrowserRouter>
    
    );
  }
}
