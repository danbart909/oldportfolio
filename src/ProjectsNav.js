import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectsNav extends Component {
  render() {
    return (
      <div id='projects-nav-container' className='nav'>
        <div className='nav-top'>
          <Link to="/" className='nav-button nav-top-button nav-bio' aria-role="button">Home</Link>
        </div>
        <div className='nav-bottom'>
          <Link to="/contact" className='nav-button nav-bottom-button nav-contact' aria-role="button">Contact</Link>
        </div>
      </div>
    )
  }
}