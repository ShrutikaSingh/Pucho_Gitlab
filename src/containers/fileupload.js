import React,{Component} from 'react';
import axios from 'axios';

  class Upload extends React.Component {
/*  constructor(){
    super();
    this.state={
      selectedFile:null
    }
    this.fileUploadHandler=this.fileUploadHandler.bind(this);
    this.fileSelectHandler=this.fileSelectHandler.bind(this)
  }
  fileUploadHandler=()=>{
      axios.post("")
  }
  fileSelectHandler=(event)=>{
    this.setState({
      selectedFile:event.target.files[0]
    })
  }
render(){
  return(
    <div>
    <h1>Upload the files to parse here</h1>
    <input type="file" onChange={this.fileSelectHandler}/>
    <button onClick={this.fileUploadHandler}> Upload </button>
    </div>
  )
}
*/


render(){
 return(
   <div>
   <h1>Welocme</h1>
   <form action="http://localhost:3001/admin/posts/create" method="post">
      <input type="file" className="form-control" id="file" name="uploadedFile"  accept="image/jpeg, image/jpg, image/png, image/bmp"/>
    <button type='submit'>Submit</button>
   </form>

   </div>
 )
}

}


export default Upload;
