import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { signin, signInWithGoogle } from '../helpers/auth';

class Signup extends Component {
  constructor(props){
    super(props);
    state = {
        email: '',
        password: '',
        error: ''
    };
    this.signInWithGoogle = this.signInWithGoogle.bind(this);
  }

handleChange(event) {
    this.setState({
        [event.target.id]: event.target.value
    });
}

async handleSubmit(event) {
    event.preventDefault();

    try {
      await signin(this.state.email, this.state.password);
    } 
    catch (error) {
      this.setState({ error: error.message });
    }
}

async googleSignIn(){
  try{
    await signInWithGoogle();
  } catch(error){
    this.setState({ error: error.message });
  }
}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Create an account</h3>
          <div>
            <input onChange={event => {this.handleChange(event)}} id="email" value={this.state.email} type="email" placeholder="Email" required></input>
          </div>
          <div>
            <input onChange={event => {this.handleChange(event)}} id="password" value={this.state.password} type="password" placeholder="Password" required></input>
          </div>
          <div>
            {this.state.error ? <p>{this.state.error}</p> : null}
            <button type="submit">Create Account</button>
            <p>Or</p>
            <button onClick={this.googleSignIn} type="button">Signup using Google</button>
          </div>
        
          <hr></hr>
          <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
        </form>
      </div>
    )
    }
}

export default Signup;