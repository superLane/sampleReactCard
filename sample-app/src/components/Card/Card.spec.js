import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

describe('Card', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<Card 
    cardTitle ={''}
    completed = {0}
    cardStatus ={''}
    cardStatus2 = {''}
    onTarget = {0}
    />));

    it('should render a <div />', () => {
        const elem = wrapper.find('div');
        expect(elem.length).toEqual(1);
    });


});