import React, { Component } from 'react'

export default class Bio extends Component {
	render() {
		return (
			<div id='bio-container'>
				<div id="bio-header">
          <span>Welcome</span>
        </div>
				<div id="bio-content">
          <span>My name is Dan Bartlett. I am a professional freelance web developer and a graduate of the Thinkful Full Stack Web Developer program. I have projects built using HTML, CSS, Javascript, jQuery, React, Node.js/Express.js, and postgresql. I'm interested in learning how to solve problems through code as efficiently as possible, either solo or while collaborating with a team. My willingness to put forth the effort necessary to overcome any challenge makes me a valuable addition to any programming team.</span>
          <p>This webpage is built in React and is fully responsive using no CSS media queries.</p>
				</div>
			</div>
		)
	}
}