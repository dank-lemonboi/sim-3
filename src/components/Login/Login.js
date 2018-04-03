import React, { Component } from 'react'
import './Login.css'
import logo from '../../assets/helo_logo.png'

export default class Login extends Component {
    render() {
        return(
            <div className='login_container'>
              <div className='auth_container'>
                <div className='login_logo_container'> <img className='image' src={logo} alt="logo"/> Helo</div>
                <div className='login_auth_link'>
                  <a href={process.env.REACT_APP_LOGIN}>
                   <div id='auth_button'>Login/Register</div>
                  </a>
                </div>
              </div>
            </div>
        )
    }
}