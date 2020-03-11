import React from 'react'
import PropTypes from 'prop-types';
import {
    Modal,
    ModalBody,
    ModalHeader,
} from 'reactstrap';
import {
    getIconType,
    getColorType,
} from 'app/constants/functions';

import './ModalDetail.scss'

const ModalDetail = ({ backdrop, isOpen, onClick, pokemon, size }) => {
    return <Modal
        isOpen={isOpen}
        backdrop={backdrop}
        contentClassName="details-modal"
        size={size}
        toggle={onClick(false, null)}>
        <ModalHeader
            className="details-header"
            toggle={onClick(false, null)}>
            {pokemon?.name && `${pokemon?.name}`}
        </ModalHeader>
        <ModalBody>
            <div
                className="row">
                <div
                    className="col-sm-4">
                    <div>
                        <img
                            src={pokemon?.sprites.front_default}
                            alt={pokemon?.name} />
                        <span>
                            #{`${pokemon ? pokemon?.id.toString().padStart(3, '0') : 'XXX'}`}
                        </span>
                        <h3>{pokemon?.name}</h3>
                        <div>
                            {
                                pokemon?.types && pokemon?.types.map((tipo, key) => {
                                    return <img
                                        key={`modal-details-${pokemon?.name}-${tipo?.type?.name}-${key}`}
                                        src={getIconType(tipo?.type?.name)}
                                        alt={tipo?.type?.name} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div
                    className="col-sm-8">
                </div>
            </div>
        </ModalBody>
    </Modal>
}

ModalDetail.propTypes = {
    backdrop: PropTypes.string,
    isOpen: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

ModalDetail.defaultProps = {
    size: 'lg',
    backdrop: 'static',
};

export default ModalDetail;
