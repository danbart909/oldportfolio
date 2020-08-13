import React, { Component } from 'react'

export default class Project3 extends Component {
  render() {
    return (
      <div id='project3' className='project'>
        <div id='project3-top' className='project-top'>
          <div id='project3-title' className='project-title'>
            <span>Thinkful Forum</span>
          </div>
          <div id='project3-links' className='project-links'>
            <div id='project3-links-live' className='project-links-live'>
              <a href="https://forum-client-delta.now.sh/" className='live-link' target="_blank">
                <i className="icon live-i fas fa-globe" role="link" />
              </a>
              <a href="https://forum-client-delta.now.sh/" className='live-link' target="_blank">
                <span className="live-span">Live</span>
              </a>
            </div>
            <div id='project3-links-client' className='project-links-client'>
  						<a href="https://github.com/danbart909/forum-client" className='client-link' target="_blank">
                <i className="icon github-i fab fa-github" role="link" />
              </a>
              <a href="https://github.com/danbart909/forum-client" className='client-link' target="_blank">
                <span className="github-span-client">Client Repo</span>
              </a>
            </div>
            <div id='project3-links-server' className='project-links-server'>
              <a href="https://github.com/danbart909/forum-server" target="_blank" className="server-link">
                <i className="icon github2-i fab fa-github-square" role="link" />
              </a>
              <a href="https://github.com/danbart909/forum-server" target="_blank" className="server-link">
                <span className="github-span-server">Server Repo</span>
              </a>
            </div>
          </div>
        </div>
        <div id='project3-mid' className='project-mid'>
          <div id='project3-description' className='project-description'>
            <span>This is a fully reactive message board for a small team or group of people to communicate with each other. It's a little more permanent and less "quick" than a messaging app such as Slack, but is still a widely used method of online communication. I spent a lot of time on message boards in my youth, so creating a forum from scratch felt like an ideal project.</span>
          </div>
          <div id='project3-tech' className='project-tech'>
            <span>Technologies:</span>
            <span>HTML, CSS, Javascript, React, Express.js, Node.js, postgresql</span>
          </div>
        </div>
        <div id='project3-bot' className='project-bot'>
          <div id='project3-img' className='project-img'>
            <a href="https://forum-client-delta.now.sh/" className='img-link' target="_blank">
              <img src='https://i.imgur.com/sfe0v83.jpg' alt='Screenshot of the Thinkful Forum'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}