/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Login  from './Login';

describe('Login', () => {

    let wrapper;
    let mockUserInfo = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Login userInfo={mockUserInfo}/>)
    })

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should call handleChange when input changes', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'name',
                value: 'BB8'
            }
        };

        wrapper.find('.user-name').simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should call handleChange when input changes', () => {
        wrapper.instance().handleChange = jest.fn();
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'quote',
                value: 'Youre our only hope'
            }
        };

        wrapper.find('.user-quote').simulate('change', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should update state of name when handleChange is called', () => {
      const mockEvent = {
          target: {
              preventDefault: jest.fn(), 
              name: 'name',
              value: 'BB8'
          }
      }

      const expected = 'BB8';
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual(expected);
    })

    it('should update state of quote when handleChange is called', () => {
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'quote',
                value: 'Youre our only hope'
            }
        }
  
        const expected = 'Youre our only hope';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('quote')).toEqual(expected);
      })

      it('should update state of rank when handleChange is called', () => {
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'rank',
                value: 'Novice'
            }
        }
  
        const expected = 'Novice';
        wrapper.instance().handleChange(mockEvent);
        expect(wrapper.state('rank')).toEqual(expected);
      })

    it('should invoke handleChange on click', () => {
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'rank',
                value: 'Novice'
            }
        }
        wrapper.instance().handleChange = jest.fn();
        wrapper.find('button').at(0).simulate('click', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should invoke handleChange on click', () => {
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'rank',
                value: 'Intermediate'
            }
        }
        wrapper.instance().handleChange = jest.fn();
        wrapper.find('button').at(1).simulate('click', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should invoke handleChange on click', () => {
        const mockEvent = {
            target: {
                preventDefault: jest.fn(), 
                name: 'rank',
                value: 'Expert'
            }
        }
        wrapper.instance().handleChange = jest.fn();
        wrapper.find('button').at(2).simulate('click', mockEvent);
        expect(wrapper.instance().handleChange).toHaveBeenCalled();
    })

    it('should call userInfo when sendUpState is invoked', () => {
      let mockEvent = {
          preventDefault: jest.fn()
      };
      wrapper.instance().sendUpState(mockEvent);
      expect(mockUserInfo).toHaveBeenCalled();
    })

    it('should invoke sendUpdate on click', () => {
      wrapper.setState({
        name: 'Bob',
        quote: 'bobs mom',
        rank: 'novice'   
      })
      wrapper.instance().sendUpState = jest.fn();
      wrapper.instance().forceUpdate();
      wrapper.find('.submit-btn').simulate('click');
      expect(wrapper.instance().sendUpState).toHaveBeenCalled();
    })
})