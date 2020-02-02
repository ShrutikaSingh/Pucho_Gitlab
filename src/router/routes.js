import React,{Component} from 'react';
import {BrowserRouter as Router,Route}from 'react-router-dom';
import LoginPage from '../containers/login';
import FileUpload from '../containers/fileupload';
import LangSelect from '../containers/langSelect';
class Routes extends Component{
render(){
  return(
    <div>
    <Router>
      <Route exact path="/" component = {LoginPage}/>
      <Route exact path="/upload" component = {FileUpload}/>
      <Route exact path="/select" component = {LangSelect}/>
    </Router>
    </div>
  )
}
}
export default Routes;
