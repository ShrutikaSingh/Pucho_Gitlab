import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import login_img from '../images/login_img.png';
import axios from 'axios';
import fileUpload from './fileupload.js'
class Login extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      password:'',
      isChecked:false,
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.toggleCheckbox=this.toggleCheckbox.bind(this);
  }

  handleChange= e => {
    this.setState({[e.target.name]:e.target.value}) /* targeting all names that is email, passord etc */

  }

toggleCheckbox =()=>{
  this.setState({isChecked:!this.state.isChecked})
  }

async handleSubmit(e){
    e.preventDefault();
    console.log(this.state);
    const { email, password }= this.state
    const form =await axios.post('/api/form', {
      email:this.state.email,
      password:password
    })
    .then(res=>{
    console.log(res)
  })
    .catch(err=>{
    console.log(err)
    }
  )
}


  render(){
  return (
    <div>
    <Container style={{paddingTop:'50px'}} >
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <div className="text-center">
          <img src={login_img} height="100px"/>
        </div>
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email"placeholder="Enter Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' checked={this.state.isChecked} onChange={this.toggleCheckbox} />{' '}
              I agree to terms & conditions.
            </Label>
          </FormGroup>
          <button type="submit">Submit</button>
        </Form>
        </Col>
        <Col md={4}></Col>
    </Row>
</Container>
</div>
);
  }
}

export default Login;
