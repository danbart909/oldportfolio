import React, { Component } from 'react'

export default class Project4 extends Component {
  render() {
    return (
      <div id='project4' className='project'>
        <div id='project4-top' className='project-top'>
          <div id='project4-title' className='project-title'>
            <span>US Census App</span>
          </div>
          <div id='project4-links' className='project-links'>
            <div id='project4-links-live' className='project-links-live'>
              <a href="https://danbart909.github.io/USCensusApp/" className='live-link' target="_blank">
                <i className="icon live-i fas fa-globe" role="link" />
              </a>
                <span className="live-span">Live</span>
            </div>
            <div id='project4-links-client' className='project-links-client'>
						  <a href="https://github.com/danbart909/USCensusApp" className='client-link' target="_blank">
                <i className="icon github-i fab fa-github" role="link" />
              </a>
              <span className="github-span-client">Client Repo</span>
            </div>
          </div>
        </div>
        <div id='project4-mid' className='project-mid'>
          <div id='project4-description' className='project-description'>
            <span>This project uses the US Census Bureau's wealth of census information to construct an app that would return a wide variety of population information from all 50 states. The enormous collection of data would prove useful for anyone seeking population statistics for research (or how to interact with the census API), and it comes with a large pool of variables to choose from.</span>
          </div>
          <div id='project4-tech' className='project-tech'>
            <span>Technologies:</span>
            <span>HTML, CSS, Javascript, jQuery</span>
          </div>
        </div>
        <div id='project4-bot' className='project-bot'>
          <div id='project4-img' className='project-img'>
          <a href="https://danbart909.github.io/USCensusApp/" className='img-link' target="_blank">
            <img src='https://i.imgur.com/OT9CXx8.jpg' alt='Screenshot of US Census App'/>
          </a>
          </div>
        </div>
      </div>
    )
  }
}