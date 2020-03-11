import React, { Component } from 'react'

import Loader from 'app/components/Loader';
import axiosPokeApi from 'app/api/axiosPokeApi';
import {
    getIconType,
    getColorType,
} from 'app/constants/functions';


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
            handleModal,
        } = this.props;

        const {
            detalle_pokemon,
            loading,
        } = this.state;

        return <div key={`li-poke-item-${index}-${nombre}`}
            className="item-poke" style={{ backgroundColor: getColorType(detalle_pokemon?.types[0]?.type?.name) }}
            onClick={handleModal(true, detalle_pokemon)}>
            <div className="img-container">
                <Loader
                    loading={loading}
                    zoom={1.2}>
                    <img
                        src={detalle_pokemon?.sprites.front_default}
                        alt={detalle_pokemon?.name} />
                </Loader>
            </div>
            <div className="info">
                <span>
                    #{`${detalle_pokemon ? detalle_pokemon?.id.toString().padStart(3, '0') : 'XXX'}`}
                </span>
                <h3>{nombre}</h3>
                {
                    detalle_pokemon && detalle_pokemon?.types.map((tipo, key) => {
                        return <img
                            key={`${detalle_pokemon?.name}-${tipo?.type?.name}-${key}`}
                            src={getIconType(tipo?.type?.name)}
                            alt={tipo?.type?.name} />
                    })
                }
            </div>
        </div>
    }
}

export default ItemPokemon;
