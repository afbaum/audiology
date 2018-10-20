import React, { Component } from 'react';


class Login extends Component {
  constructor() {
    super();
    this.state ={
      email: '',
      password: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  };

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    }
    console.log(user);
  }

  render() {
    return (
      <div className='register'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <h1 className='display-4 text-center'>Login</h1>
              <p className='lead text-center'> Login To Your Audiology Account</p>
              <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input type='email' className='form-control form-control-lg' placeholder='Email'
                  name='email' value={this.state.email} onChange={this.onChange} />
                  <small className='form-text text-muted'> This site uses Gravatar so if you want a
                  profile image, use a Gravarar email</small>
                </div>
                <div className='form-group'>
                  <input type='password' className='form-control form-control-lg' placeholder='Password'
                  name='password' value={this.state.password} onChange={this.onChange} />
                  <small className='form-text text-muted'> Password must be between 6 and 30 characters</small>
                </div>
                <div className='form-group'>
                  <input type='submit' className='btn btn-info btn-block mt-4'/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;
