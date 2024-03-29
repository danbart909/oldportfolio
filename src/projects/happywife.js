import React, { Component } from 'react'
import img from '../img/happywifepreview.jpg'
import { VFXImg, VFXSpan } from 'react-vfx';

export default class Happywife extends Component {
  render() {
    return (
      <div id='project1' className='project'>
        <div className='tophalf'>
          <div id='project1-top' className='project-top'>
            <div id='project1-title' className='project-title'>
              <span>Happy Wife Junk Service</span>
            </div>
            <div id='project1-links' className='project-links'>
              <div id='project1-links-live' className='project-links-live'>
                <a href="http://happywifejunk.com" className='live-link' target="_blank">
                  <i className="icon live-i fas fa-globe" role="link" />
                </a>
                <a href="http://happywifejunk.com" className='live-link' target="_blank">
                  <span className="live-span">Live</span>
                </a>
              </div>
              <div id='project1-links-client' className='project-links-client'>
                <a href="https://github.com/danbart909/happywife" className='client-link' target="_blank">
                  <i className="icon github-i fab fa-github" role="link" />
                </a>
                <a href="https://github.com/danbart909/happywife" className='client-link' target="_blank">
                  <span className="github-span-client">Repo</span>
                </a>
              </div>
            </div>
          </div>
          <div id='project1-mid' className='project-mid'>
            <div id='project1-description' className='project-description'>
              <span>This is the website for Happy Wife Junk Service, made with React. It has information about the areas they service, the kind of junk they remove, how they operate, pricing information, contact information, as well as a form to send the owners a direct email.</span>
            </div>
            <div id='project1-tech' className='project-tech'>
              <span className='project-tech-header'>Technologies:</span>
              <span>HTML, CSS, JavaScript, jQuery, React</span>
            </div>
          </div>
        </div>
        <div id='project1-bot' className='project-bot'>
          <div id='project1-img' className='project-img'>
            <a href="http://happywifejunk.com" className='img-link' target="_blank">
              {/* <VFXImg
                src={img}
                alt='Screenshot of Happy Wife Junk Service Homepage'
                shader='pixelateTransition'
              /> */}
              <img src={img} alt='Screenshot of Happy Wife Junk Service Homepage'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}