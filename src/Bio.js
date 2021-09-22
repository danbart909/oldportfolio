import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

export default class Bio extends Component {
	render() {
		return (
			<>
			  <div id='bio-container'>
  				<div id='bio-1'>
  				  <div id="bio-header">
              <span>Welcome</span>
            </div>
  				</div>
  				<div id='bio-2'>
  				  <div id="bio-content">
              <span>My name is Dan Bartlett. I am a full-stack web developer, mobile app developer, and a graduate of the Thinkful Full Stack Web Developer program. I have projects built using HTML, CSS, Javascript, jQuery, React, React Native, Node.js/Express.js/Knex.js, and postgresql. I'm interested in learning how to solve problems through code as efficiently as possible, either solo or while collaborating with a team. My willingness to put forth the effort necessary to overcome any challenge makes me a valuable addition to any programming team.</span>
    				</div>
            <div id='bio-footer'>
              <span>Download my Resume: <a href='/danielbartlettresume.docx'>.docx</a> or <a href='/danielbartlettresume.pdf'>.pdf</a></span>
            </div>
  				</div>
  			</div>
        <ParticlesBg type='lines' bg={true} />
			</>
		)
	}
}