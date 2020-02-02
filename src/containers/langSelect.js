import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import login_img from '../images/langselect.jpg';
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
/*
            {{ <form action="http://localhost:3001/admin/posts/create" method="post">
             <input type="file" className="form-control" id="file" name="uploadedFile"  accept="image/jpeg, image/jpg, image/png, image/bmp"/>
             <button type='submit'>Submit</button>
              </form>
        }}
*/

  render(){
  return (
    <div>
    <Container style={{paddingTop:'50px'}} >
    <Row>
      <Col md={2}></Col>
      <Col md={6}>
        <div className="text-center">
          <img src={login_img} height="200px"/>
        </div>
        <Form onSubmit={this.handleSubmit} >

        <FormGroup>
          <Input type="textarea" style={{ height: 200 }} name="text"placeholder="Select Language" onChange={this.handleChange} />
        </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Select Language</Label>
            <Input type="lang" name="text"placeholder="Select Language" onChange={this.handleChange} />
          </FormGroup>


          <FormGroup>
            <Label for="examplePassword">Select Script</Label>
            <Input type="password" name="password" placeholder="Enter Script" onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Upload File</Label>
              <input type="file" className="form-control" id="file" name="uploadedFile"  accept="image/jpeg, image/jpg, image/png, image/bmp"/>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type='checkbox' checked={this.state.isChecked} onChange={this.toggleCheckbox} />{' '}
              All data is filled.
            </Label>
          </FormGroup>

          <button type="submit">Submit</button>
        </Form>
        </Col>
        <Col md={2}></Col>
    </Row>
</Container>
</div>
);
  }
}

export default Login;
