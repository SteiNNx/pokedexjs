import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'app/components/Loader';

const LoaderButton = (props) => {
    const { id, className, loading, loadingText, disabled, children, onClick, style = {} } = props;
    if (loadingText) {
        style.display = 'inline-flex';
    }

    return (
        <button
            id={id}
            name={id}
            className={className ? `btn btn-button btn-primary ${className} ` : 'btn btn-button btn-primary'}
            onClick={onClick}
            disabled={loading || disabled}
            style={style} >
            <Loader
                loading={loading}
                zoom={0.35}
                strokeWidth={10} >
                {children}
            </Loader>
            {loading && typeof loadingText === 'string' && (
                <span style={{ marginLeft: '0.3rem' }} >{loadingText}</span>
            )}
        </button>
    );
};

LoaderButton.propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element, PropTypes.string.isRequired
    ]).isRequired,
    disabled: PropTypes.bool,
};
Loader.defaultProps = {
    disabled: false,
    loading: false,
    onClick: _ => console.log('Clicked loader!'),
}

export default LoaderButton;
