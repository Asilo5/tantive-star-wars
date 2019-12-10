import React from 'react';
import { shallow } from 'enzyme';
import ScrollText from './ScrollText';

describe('ScrollText', () => {

    let wrapper;
    let mockMovieScroll = {
        id: 1,
        title: 'Star Wars',
        crawl: 'Learning curve business-to-business first mover advantage ecosystem scrum project niche market investor customer return on investment buzz business model canvas bootstrapping technology handshake.'
    }

    beforeEach(() => {
        wrapper = shallow(<ScrollText movieScroll={mockMovieScroll} />)
    })

    it('should match snapshot with all the information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})