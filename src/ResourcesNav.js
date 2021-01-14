import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ContactNav extends Component {
  render() {
    return (
      <div id='bio-nav-container' className='nav'>
        <div className='nav-top'>
          <Link to="/" className='nav-button nav-top-button nav-bio nav-home-resources' aria-role="button">Home</Link>
        </div>
        <div className='nav-middle'>
          <Link to="/projects" className='nav-button nav-middle-button nav-projects nav-home-resources' aria-role="button">Projects</Link>
        </div>
        <div className='nav-bottom'>
          <Link to="/contact" className='nav-button nav-bottom-button nav-contact nav-home-resources' aria-role="button">Contact</Link>
        </div>
      </div>
    )
  }
}