import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Modal,
    ModalBody,
    ModalHeader,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from 'reactstrap';
import {
    getIconType,
} from 'app/constants/functions';

import './ModalDetail.scss'

const ModalDetail = ({ backdrop, isOpen, onClick, pokemon, size }) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

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
                className="row justify-content-md-center" style={{ paddingRight: '1rem', paddingLeft: '1rem' }}>
                <div
                    className="col-sm-4 details-body-left">
                    <img
                        src={pokemon?.sprites.front_default}
                        alt={pokemon?.name} />
                    <div className="info">
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
                    className="col-sm-7 offset-sm-1 details-body-right">
                    <Nav tabs
                        className="mt-1">
                        <NavItem>
                            <NavLink
                                style={activeTab == 1 ? {
                                    color: '#495057',
                                    backgroundColor: '#d0d0d0'
                                } : {}}
                                onClick={() => { toggle('1'); }}>
                                Estadisticas
                        </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent
                        className="m-1"
                        activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="details-ul">
                                        {
                                            <Fragment>
                                                <li>Velocidad</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[0]?.base_stat}</li>
                                                <li>Defensa Especial</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[1]?.base_stat}</li>
                                                <li>Ataque Especial</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[2]?.base_stat}</li>
                                            </Fragment>
                                        }
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="details-ul">
                                        {
                                            <Fragment>
                                                <li>Defensa</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[3]?.base_stat}</li>
                                                <li>Ataque</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[4]?.base_stat}</li>
                                                <li>Vida</li>
                                                <li className="detail-li-value">{pokemon?.stats?.[5]?.base_stat}</li>
                                            </Fragment>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </ModalBody>
    </Modal >
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
