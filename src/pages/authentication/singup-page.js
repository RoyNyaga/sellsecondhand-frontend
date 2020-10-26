import React, { Component } from 'react';
import axios from 'axios';


class SignUpPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      first_name: '',
      number: "",
      password: "",
      avatar: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleImageChange = this.handleImageChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleImageChange(event){
    this.setState({ avatar: event.target.files[0] });
  }

  handleSubmit (event) {
    event.preventDefault()
    const { first_name, number, password, avatar } = this.state
    let htmlForm = document.querySelector("#htmlForm")
    
    console.log(first_name, number, password, avatar)
    console.log(number)

    const formData = new FormData()

    formData.append('password', password);
    formData.append('phone', number);
    formData.append('first_name', first_name);
    formData.append('avatar', avatar, avatar.name);
    console.log(...formData)
    
    axios.post(`http://localhost:3000/registrations`, formData)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    
  }
  
  render() {
    return (
      <form id="htmlForm" onSubmit={this.handleSubmit}>
        <fieldset className='form-group'>
          <label>first name</label>
          <input
            onChange={this.handleChange}
            type='text'
            className='form-control igning-link'
            id='first_name'
            placeholder="Enter your first name"
            required
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>phone number</label>
          <input
            onChange={this.handleChange}
            type='number'
            className='form-control igning-link'
            id='number'
            placeholder="enter phone"
            required
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>password</label>
          <input
            onChange={this.handleChange}
            type='password'
            className='form-control igning-link'
            id='password'
            placeholder="enter password"
            required
          />
        </fieldset>
        <fieldset className='form-group'>
          <label>image</label>
          <input
            onChange={this.handleImageChange}
            type='file'
            className='form-control igning-link'
            id='avatar'
            accept="image/*" multiple={false}
          />
        </fieldset>
        
        <button type='submit' className='create-btn'>Create</button>
      </form>
    );
  }
}
 
export default SignUpPage;