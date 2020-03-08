import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Loader = ({ loading, children, zoom, marginTop, type, strokeWidth, style }) => {
    if (loading) {
        const loaderResizing = zoom !== 1 ? {
            transform: `scale(${zoom}) translate(${-(54 - 54 * zoom) / 2}px, ${-(54 - 54 * zoom) / 2}px)`,
            height: 54 * zoom + 'px',
            width: 54 * zoom + 'px'
        } : {};

        const explorer = (
            window.navigator.userAgent.indexOf('MSIE') > -1 ||
            window.navigator.userAgent.indexOf('Trident/') > -1
        );

        return (
            <div
                style={{
                    marginTop,
                    marginBottom: marginTop,
                    ...style,
                    ...loaderResizing
                }}
                className="loader-app" >
                {explorer ? (
                    <div style={{ borderWidth: strokeWidth + 'px' }} className="spinner-simple" ></div>
                ) : (
                        <svg className="spinner" >
                            <circle className="circle" strokeWidth={strokeWidth} r="23" cx="27" cy="27" />
                        </svg>
                    )}
            </div>
        );
    } else {
        return children;
    }
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element, PropTypes.string
    ]).isRequired,
    zoom: PropTypes.number,
    marginTop: PropTypes.string,
    type: PropTypes.number,
    strokeWidth: PropTypes.number
};
Loader.defaultProps = {
    zoom: 1,
    marginTop: null,
    type: 1,
    strokeWidth: 2
};

export default Loader;
