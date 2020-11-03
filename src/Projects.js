import React, { Component } from 'react'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'
import ParticlesBg from 'particles-bg'
import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'
import Project4 from './projects/Project4'
import Project5 from './projects/Project5'

export default class Projects extends Component {

	render() {

    let activeStyle = {
      'color': 'whitesmoke',
      'background-color': 'black',
      'border-left': '1px solid whitesmoke',
      'border-right': '1px solid whitesmoke'
    }

		return (
      <>
        <div id='projects-container'>
          <Tabs className='project-tabs' activeLinkStyle={activeStyle}>
            <div id='tab-labels'>
              <TabLink component='div' className='tab-link' to='tab1'>Happy Wife Junk Service</TabLink>
              <TabLink component='div' className='tab-link' to='tab2'>The Black Market</TabLink>
              <TabLink component='div' className='tab-link' to='tab3'>Thinkful Forum</TabLink>
              <TabLink component='div' className='tab-link' to='tab4'>US Census App</TabLink>
              <TabLink component='div' className='tab-link' to='tab5'>Turtle Racing</TabLink>
            </div>
            <div id='tab-content'>
              <TabContent for='tab1'>
                <Project1 />
              </TabContent>
              <TabContent for='tab2'>
                <Project2 />
              </TabContent>
              <TabContent for='tab3'>
                <Project3 />
              </TabContent>
              <TabContent for='tab4'>
                <Project4 />
              </TabContent>
              <TabContent for='tab5'>
                <Project5 />
              </TabContent>
            </div>
          </Tabs>
        </div>
        <ParticlesBg type='thick' bg={true} />
      </>
		)
	}
}