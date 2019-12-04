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

    it('should call handleChange when input changes', () => {
      
    })

    it('should update state when handleChange is called', () => {

    })

    it('should invoke handleChange on click', () => {
        
    })

    it('should call userInfo when sendUpState is invoked', () => {

    })

    it('should invoke sendUpdate on click', () => {

    })
})