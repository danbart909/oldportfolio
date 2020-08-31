import React, { Component } from 'react'

export default class Project2 extends Component {
  render() {
    return (
      <div id='project2' className='project'>
        <div className='tophalf'>
          <div id='project2-top' className='project-top'>
            <div id='project2-title' className='project-title'>
              <span>The Black Market</span>
            </div>
            <div id='project2-links' className='project-links'>
              <div id='project2-links-live' className='project-links-live'>
                <a href="https://tbm-client.now.sh/" className='live-link' target="_blank">
                  <i className="icon live-i fas fa-globe" role="link" />
                </a>
                <a href="https://tbm-client.now.sh/" className='live-link' target="_blank">
                  <span className="live-span">Live</span>
                </a>
              </div>
              <div id='project2-links-client' className='project-links-client'>
                <a href="https://github.com/OmarMutd/TBM-Client" className='client-link' target="_blank">
                  <i className="icon github-i fab fa-github" role="link" />
                </a>
                <a href="https://github.com/OmarMutd/TBM-Client" className='client-link' target="_blank">
                  <span className="github-span-client">Client</span>
                </a>
              </div>
              <div id='project2-links-server' className='project-links-server'>
                <a href="https://github.com/danbart909/TBM-Server" target="_blank" className="server-link">
                  <i className="icon github2-i fab fa-github-square" role="link" />
                </a>
                <a href="https://github.com/danbart909/TBM-Server" target="_blank" className="server-link">
                  <span className="github-span-server">Server</span>
                </a>
              </div>
            </div>
          </div>
          <div id='project2-mid' className='project-mid'>
            <div id='project2-description' className='project-description'>
              <span>This fake e-commerce app sells only things that are black, and was built in a group with three others. Since the items aren't real and no monetary transaction takes place, the project serves no actual purpose, but was chosen as a demonstration of our capabilities as web developers.</span>
            </div>
            <div id='project2-tech' className='project-tech'>
              <span>Technologies:</span>
              <span>HTML, CSS, Javascript, React, Express.js, Node.js, postgresql</span>
            </div>
          </div>
        </div>
        <div id='project2-bot' className='project-bot'>
          <div id='project2-img' className='project-img'>
            <a href="https://tbm-client.now.sh/" className='img-link' target="_blank">
              <img src='https://i.imgur.com/n9fpUHc.jpg' alt='Screenshot of The Black Market Homepage'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}