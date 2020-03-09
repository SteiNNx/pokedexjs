import React, { Component, Fragment } from 'react'

import axiosPokeApi from 'app/api/axiosPokeApi';
import {
    LISTA_POKEMON
} from 'app/api/constants';
import ButtonLoad from 'app/components/Loader/ButtonLoad';
import ItemPokemon from 'app/components/ListsPokemon/ItemPokemon';
import ModalDetail from 'app/components/Modal/ModalDetail';
import Loader from 'app/components/Loader';

import './index.scss';

class ListPokemon extends Component {

    state = {
        lista_pokemon: [],
        get_more_url: null,
        selectPokemon: null,
        isOpenModal: false,
        loading: true,
    }

    componentDidMount() {
        this.loadPokemons(LISTA_POKEMON, false);
    }

    loadPokemons = (url, loadMore) => {
        axiosPokeApi.get(url)
            .then((response) => {
                this.setState((state) => ({
                    lista_pokemon: loadMore ? [...state.lista_pokemon, ...response.data.results] : response.data.results,
                    get_more_url: response.data.next,
                    loading: false,
                }));
            })
            .catch((error) => {
                console.error(error.data);
            })
    }

    handleModal = (value, selectPokemon) => event => {
        this.setState((_) => ({ isOpenModal: value, selectPokemon: selectPokemon }));
    }

    handleLoadMore = url_more => event => {
        this.loadPokemons(url_more, true);
    }

    render() {

        const {
            lista_pokemon,
            get_more_url,
            selectPokemon,
            isOpenModal,
            loading,
        } = this.state;

        return <Fragment>
            <Loader
                loading={loading}
                zoom={2}
                marginTop={'5rem'}>
                <Fragment>
                    <div className="grid-poke">
                        {
                            lista_pokemon.map((pokemon, index) => {
                                return <ItemPokemon
                                    index={index}
                                    key={`item-pokemon-${index}`}
                                    nombre={pokemon.name}
                                    url_detalle={pokemon.url}
                                    handleModal={this.handleModal} />
                            })
                        }

                    </div>
                    {
                        get_more_url !== null && <div className="load-more">
                            <ButtonLoad
                                id="btn-load-more"
                                name="btn-load-more"
                                onClick={this.handleLoadMore(get_more_url)} >
                                Cargar mas
                            </ButtonLoad>
                        </div>
                    }
                    <ModalDetail
                        isOpen={isOpenModal}
                        pokemon={selectPokemon}
                        onClick={this.handleModal} />
                </Fragment>
            </Loader>
        </Fragment>
    }
}

export default ListPokemon;
