import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import PowerModeInput from 'power-mode-input'

export default class Contact extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  componentDidMount(){
    PowerModeInput.make(document.querySelector('#nameinput'));
    PowerModeInput.make(document.querySelector('#emailinput'));
  }

  setName = (e) => {
    this.setState({name: e.target.value})
  }

  setEmail = (e) => {
    this.setState({email: e.target.value})
  }

  setMessage = (e) => {
    this.setState({message: e.target.value})
  }

	render() {
		return (
      <>
        <div id='contact-container'>
          <div id='contact-button-header-container'>
            <div id='contact-header'>
              <span id='contact-span-1'>I have accounts on Linkedin and GitHub.</span>
              <span id='contact-span-2'>You could also use the form below to send me an email directly.</span>
            </div>
            <div id='contact-buttons'>
              <a href="https://www.linkedin.com/in/d-bartlett/" target="_blank"><i className="icon2 fab fa-linkedin fa-2x" id="linkedin-i" role="link" /></a>
              <a href="https://github.com/danbart909" target="_blank"><i className="icon2 fab fa-github fa-2x" id="github-i" role="link" /></a>
            </div>
          </div>
          <div id='contact-form-container'>
  
            <form id='contact-form' action="https://formspree.io/xknqpjya" method="POST">
  
              <fieldset id='form-fieldset'>
  
                <legend id='form-legend' className='hidden'>Contact Form</legend>
  
                {/* <label id="namelabel" className="label" htmlFor="nameinput">Name: </label> */}
                <input id="nameinput" type="text" name="name" placeholder="Name" value={this.state.name} onChange={(e) => {this.setName(e)}} required />
  
                {/* <label id="emaillabel" className="label" htmlFor="emailinput">Email: </label> */}
                <input id="emailinput" type="email" name="emailaddress" placeholder="Email (not required)" value={this.state.email} onChange={(e) => {this.setEmail(e)}} />
  
                <div id="textarea">
                  <textarea id="maininput" name="emailbody" placeholder="Write your message here." value={this.state.message} onChange={(e) => {this.setMessage(e)}} required defaultValue={""} />
                </div>
  
                <div id="contactbutton">
                  <input id="submit" type="submit" name="send" defaultValue="Send" value="Send Email"/>
                </div>
  
              </fieldset>
  
            </form>
          </div>
        </div>
        <ParticlesBg type='circle' bg={true} />
      </>
		)
	}
}