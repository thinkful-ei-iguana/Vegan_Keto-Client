import React from "react";
import { Link } from "react-router-dom";

import Form from '../Form/Form';
// import Auth from "../Helpers/Auth";
import AuthApiService from '../../Services/AuthApiService';

import './AccountCreation.css';


class AccountCreation extends React.Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }    
  };

  state = { error: null }

  firstInput = React.createRef()

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, emailAddress, password } = ev.target
    AuthApiService.postUser({
      username: username.value,
      emailAddress: emailAddress.value,
      password: password.value
    })
    .then(user => {
      username.value = ''
      emailAddress.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    })
    .catch(res => {
      this.setState({ error: res.error })
    })
  }
  componentDidMount() {
    this.firstInput.current.focus()
  }




  handleRegistrationSuccess = user => {
    const { history } = this.props;
    history.push("/login");
  };

  state = { error: null };

  createSubmit = ev => {
    ev.preventDefault();
    const { first_name, user_name, user_email, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.createAccount({
      first_name: first_name.value,
      user_name: user_name.value.toLowerCase(),
      user_email: user_email.value,
      password: password.value
    })
      .then(user => {
        first_name.value = "";
        user_name.value = "";
        user_email.value = "";
        password.value = "";
        this.handleRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state
    return (
      <div>
         <div role='alert'>
            {error && <p>{error}</p>}
          </div>
        <div>
          <Form />
        </div>      
          <footer>
            <button type='submit'>
              Sign Up Here!
            </button>
            {' '}
            <Link to='/login'>Already have an account?</Link>
          </footer>        
      </div>  
    )
  }
} 


export default AccountCreation;