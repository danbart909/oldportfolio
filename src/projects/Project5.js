import React, { Component } from 'react'

export default class Project4 extends Component {
  render() {
    return (
      <div id='project5' className='project'>
        <div className='tophalf'>
          <div id='project5-top' className='project-top'>
            <div id='project5-title' className='project-title'>
              <span>Turtle Racing</span>
            </div>
            <div id='project5-links' className='project-links'>
              <div id='project5-links-live' className='project-links-live'>
                <a href="https://turtle-racing.vercel.app/" className='live-link' target="_blank">
                  <i className="icon live-i fas fa-globe" role="link" />
                </a>
                <a href="https://turtle-racing.vercel.app/" className='live-link' target="_blank">
                  <span className="live-span">Live</span>
                </a>
              </div>
              <div id='project5-links-client' className='project-links-client'>
                <a href="https://github.com/danbart909/turtle-racing" className='client-link' target="_blank">
                  <i className="icon github-i fab fa-github" role="link" />
                </a>
                <a href="https://github.com/danbart909/turtle-racing" className='client-link' target="_blank">
                  <span className="github-span-client">Client</span>
                </a>
              </div>
            </div>
          </div>
          <div id='project5-mid' className='project-mid'>
            <div id='project5-description' className='project-description'>
              <span>This is a simple two-click game built using Javascript, React, and jQuery in which the user selects a turtle and clicks the button to start the race. The user wins if their selected turtle finishes the race first. It is currently a work in progress with a barebones UI, however the main functionality of racing works as intended. Go pick a turtle and try a race!</span>
            </div>
            <div id='project5-tech' className='project-tech'>
              <span>Technologies:</span>
              <span>HTML, CSS, Javascript, jQuery, React</span>
            </div>
          </div>
        </div>
        <div id='project5-bot' className='project-bot'>
          <div id='project5-img' className='project-img'>
          <a href="https://turtle-racing.vercel.app/" className='img-link' target="_blank">
            <img src='https://i.imgur.com/lwoQkNM.jpg' alt='Screenshot of Turtle Racing'/>
          </a>
          </div>
        </div>
      </div>
    )
  }
}