import React, { Component } from 'react'
import Header from '../Header/Header'
import './Dashboard.css'
import Cat from '../../assets/grumpy_cat.png'

export default class Dashboard extends Component {
    render() {
        return(
            <div>
            <Header/>
            <div className='dashboard_parent_container'>
              <section className='user_profile'>
              <div className='user_image'></div>
              <div className=''></div>
              <img className='cat' src={Cat} alt="cat" />
              </section>
              <div className='welcome_message'>
                <p>Welcome to Helo! Find recommended friends based on your similarities, and even search for them by name. The more you update your profile, the better recommendations we can make!</p>
              </div>
              <div className='recommended_parent'>
                <div className='recommended_header'>
                <video _ngcontent-c1="" autoplay="" loop="" mute="" src="https://s3.amazonaws.com/devmountain/www/img/devmtnbackgroundvideo.mp4" class="vsc-initialized" data-vscid="e8dtxlejh"></video>
                </div>
                <div className='recommended_users_child'>
                </div>
              </div>
              </div>
            </div>
        )
    }
}