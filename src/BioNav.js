import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class BioNav extends Component {
  render() {
    return (
      <div id='bio-nav-container' className='nav'>
        <div className='nav-top'>
				  <Link to="/projects" className='nav-button nav-top-button nav-projects nav-home-bio' aria-role="button">Projects</Link>
        </div>
        <div className='nav-bottom'>
				  <Link to="/contact" className='nav-button nav-bottom-button nav-contact nav-home-bio' aria-role="button">Contact</Link>
        </div>
      </div>
    )
  }
}