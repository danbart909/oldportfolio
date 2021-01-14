import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContactNav extends Component {
  render() {
    return (
      <div id='bio-nav-container' className='nav'>
        <div className='nav-top'>
          <Link to="/" className='nav-button nav-top-button nav-bio nav-home-contact' aria-role="button">Home</Link>
        </div>
        <div className='nav-middle'>
          <Link to="/projects" className='nav-button nav-middle-button nav-projects nav-home-contact' aria-role="button">Projects</Link>
        </div>
        <div className='nav-bottom'>
          <Link to="/resources" className='nav-button nav-bottom-button nav-resources nav-home-contact' aria-role="button">Resources</Link>
        </div>
      </div>
    )
  }
}