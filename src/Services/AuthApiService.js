import config from '../config';
import TokenService from './TokenService';

const AuthApiService = {
    postUser(username) {
        console.log(config);
        return fetch(`${config.API_ENDPOINT}/api/user`, {
            method: 'POST',
            headers: {
                'content-type': 'applicaiton/json',
            },
            body: JSON.stringigy(username),
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
            )

    },

    postAccountCreation({ emailAddress, password }) {
        return fetch(`${config.API_ENDPOINT}/api/auth/token`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ emailAddress, password }),
        })
        .then(res =>
            (!res.ok)
                ? res.json().then(err => Promise.reject(err))
                : res.json()
            )
    },

    refreshToken() {
        return fetch(`${config.API_ENDPOINT}/api/auth/token`, {
          method: 'PUT',
          headers: {
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
        })
          .then(res =>
            (!res.ok)
              ? res.json().then(e => Promise.reject(e))
              : res.json()
          )
      },
    }

    export default AuthApiService;