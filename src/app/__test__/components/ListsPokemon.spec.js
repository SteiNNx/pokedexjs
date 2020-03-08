import React from 'react';
import { mount } from 'enzyme';
/** import { create } from 'react-test-renderer'; */

import ListsPokemon from 'app/components/ListsPokemon';

describe('TestListsPokemon', () => {
    test('render ', () => {
        const listsPokemonWrapper = mount(<ListsPokemon />);
        expect(listsPokemonWrapper.length).toEqual(1);
    });
});
