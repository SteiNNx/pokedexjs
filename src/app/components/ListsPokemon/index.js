import React, { Component, Fragment } from 'react'

import axiosPokeApi from 'app/api/axiosPokeApi';
import {
    LISTA_POKEMON
} from 'app/api/constants';
import Loader from 'app/components/Loader';
import ItemPokemon from 'app/components/ListsPokemon/ItemPokemon';

import './index.scss';

class ListPokemon extends Component {

    state = {
        lista_pokemon: [],
        loading: true,
    }

    componentDidMount() {
        axiosPokeApi.get(LISTA_POKEMON)
            .then((response) => {
                this.setState((_) => ({
                    lista_pokemon: response.data.results,
                    loading: false,
                }));
            })
            .catch((error) => {
                console.error(error.data);
            })
    }

    render() {

        const {
            lista_pokemon,
            loading,
        } = this.state;

        return (
            <Fragment>
                <Loader
                    loading={loading}
                    zoom={2}
                    marginTop={'5rem'}>
                    <div className="grid-poke">
                        {
                            lista_pokemon.map((pokemon, index) => {
                                return <ItemPokemon
                                    index={index}
                                    key={`item-pokemon-${index}`}
                                    nombre={pokemon.name}
                                    url_detalle={pokemon.url} />
                            })
                        }
                    </div>
                </Loader>
            </Fragment>
        )
    }
}

export default ListPokemon;
