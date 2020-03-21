import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        >         
          <div>
            <label htmlFor='registration-username-input' required>
              Choose a username
            </label>
            <input 
              ref={this.firstInput}
              id='registration-username-input'
              name='username'
              required
              />              
          </div>
          <div>
            <label htmlFor='registration-emailAddress-input' required>
              Enter your email address
            </label>
            <input 
              id='registration-emailAddress-input'
              name='email-address'
              required
              />
          </div>
          <div>
            <label htmlFor='registration-password-input' required>
              Choose a password
            </label>
            <input
              id='registration-password-input'
              name='password'
              type='password'
              required
              />
          </div>
          </form>
    )
  }
}

export default Form; 