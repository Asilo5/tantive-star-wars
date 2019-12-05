import React from 'react';
import { shallow } from 'enzyme';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {

    const wrapper = shallow(<CharacterCard name = 'Leia'
                                           homeWorld = 'Alderan'
                                           population = '200000000000'
                                           species = 'Human'
                                           films = {[
                                               "The Empire Strikes Back",
                                                "Revenge of the Sith",
                                                "Return of the Jedi"
                                            ]}
                                                 />)

    it('should match snapshot with all information passing in correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})