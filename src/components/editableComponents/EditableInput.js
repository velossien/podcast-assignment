import React from 'react';
import PropTypes from 'prop-types';

function EditableInput({ isEditMode, onChange, value }) {
    if (isEditMode) {
        return (
            <input
                onChange={onChange}
                type="text"
                value={value}
            />
        );
    } else {
        return value;
    }
};

EditableInput.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

EditableInput.defaultProps = {
    value: '',
};

export default EditableInput;