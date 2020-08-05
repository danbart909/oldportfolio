import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContactNav extends Component {
  render() {
    return (
      <div id='bio-nav-container' className='nav'>
        <div className='nav-top'>
          <Link to="/" className='nav-button nav-top-button nav-bio' aria-role="button">Home</Link>
        </div>
        <div className='nav-bottom'>
          <Link to="/projects" className='nav-button nav-bottom-button nav-projects' aria-role="button">Projects</Link>
        </div>
      </div>
    )
  }
}