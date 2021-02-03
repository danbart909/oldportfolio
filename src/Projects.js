import React, { Component } from 'react'
import { Tabs, TabLink, TabContent } from 'react-tabs-redux'
import ParticlesBg from 'particles-bg'
import Happywife from './projects/happywife'
import Blackmarket from './projects/blackmarket'
import Forum from './projects/forum'
import Census from './projects/census'
import TurtleRacing from './projects/turtleracing'

export default class Projects extends Component {

	render() {

    let activeStyle = {
      'color': 'white',
      'background-color': 'black'
    }

		return (
      <>
        <div id='projects-container'>
          <Tabs className='project-tabs' activeLinkStyle={activeStyle}>
            <div id='tab-labels'>
              <TabLink component='div' className='tab-link' to='tab1'>Happy Wife Junk Service</TabLink>
              <TabLink component='div' className='tab-link' to='tab2'>Turtle Racing</TabLink>
              <TabLink component='div' className='tab-link' to='tab3'>US Census App</TabLink>
              <TabLink component='div' className='tab-link' to='tab4'>The Black Market</TabLink>
              <TabLink component='div' className='tab-link' to='tab5'>Thinkful Forum</TabLink>
            </div>
            <div id='tab-content'>
              <TabContent for='tab1'>
                <Happywife />
              </TabContent>
              <TabContent for='tab2'>
                <TurtleRacing />
              </TabContent>
              <TabContent for='tab3'>
                <Census />
              </TabContent>
              <TabContent for='tab4'>
                <Blackmarket />
              </TabContent>
              <TabContent for='tab5'>
                <Forum />
              </TabContent>
            </div>
          </Tabs>
        </div>
        <ParticlesBg type='thick' bg={true} />
      </>
		)
	}
}