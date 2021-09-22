import React, { Component } from 'react'
import img1 from '../img/pollboothpreview1.jpg'
import img2 from '../img/pollboothpreview2.jpg'
import img3 from '../img/pollboothpreview3.jpg'

export default class PollBooth extends Component {
  render() {
    return (
      <div id='project6' className='project'>
        <div className='tophalf'>
          <div id='project6-top' className='project-top'>
            <div id='project6-title' className='project-title'>
              <span>PollBooth</span>
            </div>
            <div id='project6-links' className='project-links'>
              <div id='project6-links-live' className='project-links-live'>
                <a href="https://play.google.com/store/apps/details?id=com.pollbooth" className='live-link' target="_blank">
                  <i className="icon live-i fab fa-google-play" role="link" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.pollbooth" className='live-link' target="_blank">
                  <span className="live-span">Play Store</span>
                </a>
              </div>
              {/* <div id='project6-links-client' className='project-links-client'>
                <a href="https://github.com/danbart909/turtle-racing" className='client-link' target="_blank">
                  <i className="icon github-i fab fa-github" role="link" />
                </a>
                <a href="https://github.com/danbart909/turtle-racing" className='client-link' target="_blank">
                  <span className="github-span-client">Client</span>
                </a>
              </div> */}
            </div>
          </div>
          <div id='project6-mid' className='project-mid'>
            <div id='project6-description' className='project-descriptionxX'>
              <span>PollBooth is an app on the Google Play store made using React Native and uses Expo for workflow management. It lets users find those who represent them in the federal and state government and give them a rating once a day. You can then search and view a graph of any representative on the Data page and see how others have rated them as well.</span>
              <span>Traditional political polls involve a sample size of thousands of people to represent a country of hundreds of millions, but this app provides a way for anyone to participate in unofficial political polls and view the results as they happen.</span>
            </div>
            <div id='project6-tech' className='project-tech'>
              <span>Technologies:</span>
              <span>React Native, Expo, postgreSQL, node.js, knex.js</span>
            </div>
          </div>
        </div>
        <div id='project6-bot' className='project-botxX'>
          <div id='project6-img1' className='project-img'>
            <a href="https://play.google.com/store/apps/details?id=com.pollbooth" className='img-link' target="_blank">
              <img src={img1} alt='Screenshot of PollBooth'/>
            </a>
          </div>
          <div id='project6-img2' className='project-img'>
            <a href="https://play.google.com/store/apps/details?id=com.pollbooth" className='img-link' target="_blank">
              <img src={img2} alt='Screenshot of PollBooth'/>
            </a>
          </div>
          <div id='project6-img3' className='project-img'>
            <a href="https://play.google.com/store/apps/details?id=com.pollbooth" className='img-link' target="_blank">
              <img src={img3} alt='Screenshot of PollBooth'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}