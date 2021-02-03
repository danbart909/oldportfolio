import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectsNav extends Component {
  render() {
    return (
      <div id='projects-nav-container' className='nav'>
        <div className='nav-top'>
          <Link to="/" className='nav-button nav-top-button nav-bio nav-home-projects' aria-role="button">Home</Link>
        </div>
        <div className='nav-middle'>
          <Link to="/contact" className='nav-button nav-middle-button nav-contact nav-home-projects' aria-role="button">Contact</Link>
        </div>
        {/* <div className='nav-bottom'>
          <Link to="/resources" className='nav-button nav-bottom-button nav-resources nav-home-projects' aria-role="button">Resources</Link>
        </div> */}
      </div>
    )
  }
}