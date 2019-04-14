import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import Calculator from '../Calculator/Calculator';

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        const elem = wrapper.find('div');
        expect(elem.length).toEqual(1);
    });

    it('should render the Calculator Component', () => {
        expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
      });
  });