import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Card from './components/Card/Card';

describe('App', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<App />));

  it('should render a <div />', () => {
    const elem = wrapper.find('div');
    expect(elem.length).toEqual(1);
  });

  it('should render the Card Component', () => {
    expect(wrapper.containsMatchingElement(<Card />)).toEqual(true);
  });

});