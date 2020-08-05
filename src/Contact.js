import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
      <div id='contact-container'>
        <div id='contact-button-header-container'>
          <div id='contact-header'>
            <span id='contact-span-1'>I have accounts on Linkedin and GitHub.</span>
            <span id='contact-span-2'>You could also use the form below to send me an email directly.</span>
          </div>
          <div id='contact-buttons'>
            <a href="https://www.linkedin.com/in/d-bartlett/" target="_blank"><i className="icon fab fa-linkedin fa-2x" id="linkedin-i" role="link" /></a>
            <a href="https://github.com/danbart909" target="_blank"><i className="icon fab fa-github fa-2x" id="github-i" role="link" /></a>
          </div>
        </div>
        <div id='contact-form-container'>

          <form id='contact-form' action="https://formspree.io/xknqpjya" method="POST"></form>

            <fieldset id='form-fieldset'>

              <legend id='form-legend' className='hidden'>Contact Form</legend>

              {/* <label id="namelabel" className="label" htmlFor="nameinput">Name: </label> */}
              <input id="nameinput" type="text" name="name" placeholder="Name" required />

              {/* <label id="emaillabel" className="label" htmlFor="emailinput">Email: </label> */}
              <input id="emailinput" type="email" name="emailaddress" placeholder="Email (not required)" />

              <div id="textarea">
                <textarea id="maininput" name="emailbody" placeholder="Write your message here." required defaultValue={""} />
              </div>

              <div id="contactbutton">
                <input id="submit" type="submit" name="send" defaultValue="Send" value="Send Email"/>
              </div>

            </fieldset>
        </div>
      </div>
		)
	}
}