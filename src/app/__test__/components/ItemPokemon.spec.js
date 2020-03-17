import React from 'react';
import { mount } from 'enzyme';
/** import { create } from 'react-test-renderer'; */

import ItemPokemon from 'app/components/ListsPokemon/ItemPokemon';

describe('TestItemPokemon', () => {
    test('render ', () => {
        const index = 0;
        const nombre = 'bulbasaur';
        const url_detalle = 'https://pokeapi.co/api/v2/pokemon/1/';
        const handleModal = jest.fn();

        const listsPokemonWrapper = mount(<ItemPokemon index={index}
            nombre={nombre}
            url_detalle={url_detalle}
            handleModal={handleModal} />);

        expect(listsPokemonWrapper.length)
            .toEqual(1);;
    });
    test('Click', () => {
        const index = 0;
        const nombre = 'bulbasaur';
        const url_detalle = 'https://pokeapi.co/api/v2/pokemon/1/';
        const handleModal = jest.fn();

        const listsPokemonWrapper = mount(<ItemPokemon index={index}
            nombre={nombre}
            url_detalle={url_detalle}
            handleModal={handleModal} />);

        listsPokemonWrapper
            .simulate('click');
        expect(handleModal)
            .toHaveBeenCalled();
    });
});
