import React, { Component } from 'react'
import Header from '../Header/Header'
import './Dashboard.css'

export default class Dashboard extends Component {
    render() {
        return(
            <div>
            <Header/>
            <div className='dashboard_parent_container'>
              <section className='user_profile'>
              <div className='user_image'></div>
              <div className=''></div>
              </section>
              <section className='welcome_message'>
                <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
              </section>
              <div className='recommended_parent'>
                <div className='recommended_header'></div>
                <div className='recommended_users_child'></div>
              </div>
              </div>
            </div>
        )
    }
}