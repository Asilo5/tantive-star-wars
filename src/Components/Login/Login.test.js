import React from 'react';
import { shallow } from 'enzyme';
import Login  from './Login';

describe('Login', () => {

    let wrapper;
    let mockUserInfo = jest.fn();

    beforeEach(() => {
        wrapper=shallow(<Login userInfo={mockUserInfo}/>)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})