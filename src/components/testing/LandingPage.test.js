import React from 'react';
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import LandingPage from '../LandingPage'

configure({ adapter: new Adapter()})

describe('Teting LandingPage component', () => {

  it('testing the component', () => {
    const wrapper = mount(<LandingPage />)

    expect(wrapper.find('h2').children().at(0).text().includes("self-taugh")).toEqual(true)
  })
})