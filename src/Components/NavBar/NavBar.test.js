import React from 'React';
import { shallow } from 'enzyme';
import NavBar from './NavBar';

describe('NavBar', () => {

    let wrapper = shallow(<NavBar userName = 'Consuelo'
                                  userQuote = 'Luke, Ich bin dein Vater'
                                  userRank = 'Novice' />);

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

})