import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component{
  render(){
    return(
      <div className="landing">
        <div className="landing-overlay landing-inner text-light">
          <div classname='container'>
            <div className='row'>
              <div className="col-md-12 text-center">
                <h1 className="display-3 mt-4 mb-4">Website for VA Audiologists</h1>
                <p className="lead"> Create a profile, share posts and get help from
                other Audiologists</p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">Sign up</Link>
                <Link to="/login" className="btn btn-lg btn-light">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
