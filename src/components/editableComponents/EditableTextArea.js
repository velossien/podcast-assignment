import React from 'react';
import PropTypes from 'prop-types';

function EditableTextArea({ isEditMode, onChange, value }) {
    if (isEditMode) {
        return (
            <textarea
                onChange={onChange}
                type="text"
                value={value}
            />
        );
    } else {
        return value;
    }
};

EditableTextArea.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

EditableTextArea.defaultProps = {
    value: '',
};

export default EditableTextArea;