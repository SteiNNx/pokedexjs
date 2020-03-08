import React, { Component } from 'react'

import Loader from 'app/components/Loader';
import axiosPokeApi from 'app/api/axiosPokeApi';
import { getIconType } from 'app/constants/functions';


class ItemPokemon extends Component {

    state = {
        detalle_pokemon: null,
        loading: true,
    }

    componentDidMount() {
        axiosPokeApi.get(this.props.url_detalle)
            .then((response) => {
                this.setState((_) => ({
                    detalle_pokemon: response.data,
                    loading: false,
                }));
            })
            .catch((error) => {
                console.error(error.data);
            })
    }

    render() {
        const {
            index,
            nombre,
        } = this.props;

        const {
            detalle_pokemon,
            loading,
        } = this.state;

        return <div key={`li-poke-item-${index}-${nombre}`}
            className="item-poke">
            <div>
                <Loader
                    loading={loading}
                    zoom={2}
                    marginTop={'5rem'}>
                    <img
                        src={detalle_pokemon?.sprites.front_default}
                        alt={detalle_pokemon?.name} />
                </Loader>
            </div>
            <div className="name-poke">
                {nombre}
            </div>
            <div className="type-poke">
                {
                    detalle_pokemon && detalle_pokemon?.types.map((tipo) => {
                        return <img
                            src={getIconType(tipo?.type?.name)}
                            alt={tipo?.type?.name} />
                    })
                }
            </div>
        </div>
    }
}

export default ItemPokemon;
