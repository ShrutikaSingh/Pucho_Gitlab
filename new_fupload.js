import React,{Component} from 'react';
import {FileManager} from 'reactjs-file-uploader';
import {FileUploader} from 'reactjs-file-uploader';
import axios from 'axios';

class Upload extends React.Component {

<form action="my_redirect_url" method="post" onSubmit={this.registerEmail.bind(this)}>
   <input
     type="file"
     name='EMAIL'
     value={this.state.email}
     onChange={this.handleChangeEmail}
   />
   <button type='submit' />
</form>
}

export default Upload;
