import React from 'react'
import PropTypes from 'prop-types';
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
} from 'reactstrap';

import './ModalDetail.scss'

const ModalDetail = ({ backdrop, isOpen, onClick, pokemon, size }) => {
    return <Modal
        isOpen={isOpen}
        backdrop={backdrop}
        size={size}
        toggle={onClick(false, null)}>
        <ModalHeader
            className="details-header"
            toggle={onClick(false, null)}>
            {pokemon?.name && `${pokemon?.name}`}
        </ModalHeader>
        <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
            <button
                id="btn-modal-detail-close"
                name="btn-modal-detail-close"
                className="btn btn-danger btn-sm"
                onClick={onClick(false, null)}>
                Cancel
            </button>
        </ModalFooter>
    </Modal>
}

ModalDetail.propTypes = {
    backdrop: PropTypes.string,
    isOpen: PropTypes.bool,
    size: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

ModalDetail.defaultProps = {
    size: 'ie',
    backdrop: 'static',
};

export default ModalDetail;
