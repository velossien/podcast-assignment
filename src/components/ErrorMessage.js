import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ closeError, errorMessage }) {
    return (
        <div className="error_message">
            <span>{errorMessage}</span>
            <span className="error-message-close-button" onClick={closeError}>X</span>
        </div>
    );
};

ErrorMessage.propTypes = {
    closeError: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
};

ErrorMessage.defaultProps = {
    errorMessage: '',
};

export default ErrorMessage;