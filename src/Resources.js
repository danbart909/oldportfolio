import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'

export default class Resources extends Component {

  renderList = () => {

    const list = [
      {
        url: 'https://www.w3schools.com',
        title: 'w3schools.com',
        desc: 'Quick Reference'
      },
      {
        url: 'https://developer.mozilla.org/en-US/',
        title: 'developer.mozilla.org',
        desc: 'MDN Docs'
      },
      {
        url: 'https://htmlcolorcodes.com/color-names',
        title: 'htmlcolorcodes.com/color-names',
        desc: 'The 140 HTML Color Names'
      },
      {
        url: 'https://www.onlineconversion.com/',
        title: 'onlineconversion.com',
        desc: 'Unit Converter'
      },
      {
        url: 'https://fontawesome.com/icons?d=gallery',
        title: 'fontawesome.com/gallery',
        desc: 'Icons'
      }
    ]

    let HTML = []

    list.forEach(x => {
      HTML.push(
        <div className='R-item'>
          <div className='R-left'>
            <a href={x.url} target='_blank'>
              <span>{x.title}</span>
            </a>
          </div>
          <div className='R-right'>
            <span>{x.desc}</span>
          </div>
        </div>
      )
    })
    return HTML
  }

  render() {
    return (
      <>
        <div className='R-container container'>
          <div className='R-1 one'>
  				  <div className="R-header">
              <span>This is a list of resources I've actually found useful when writing my code. It's more of a list for me, really, but it's here for anyone else who wants it.</span>
            </div>
  				</div>
          <div className='R-2 two'>
            {this.renderList()}
          </div>
        </div>
        <ParticlesBg type='fountain' bg={true} />
      </>
    )
  }
}