import React, { Component } from 'react'
import './Header.css';
import home from '../../assets/helo_home.png'
import search from '../../assets/helo_search.png'

export default class Header extends Component {
    render() {
    return(
        <div className='header_parent'>
          <nav className='nav_container'>
          Helo
          <img src={home} alt="home"/>
          <img src={search} alt="search"/>
          </nav>
        <div className='banner'>Dashboard</div>
        <a><div className='logout'>Logout</div></a>
        </div>
    )
 }
}