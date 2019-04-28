import React from 'react';
import PropTypes from 'prop-types';
import EditableTextArea from '../editableComponents/EditableTextArea';

function EpisodeDescription({ description, isEditMode, onChange }) {
    return (
        <div className="episode_description">
            <EditableTextArea
                isEditMode={isEditMode}
                onChange={onChange}
                value={description}
            />
        </div>
    );
};

EpisodeDescription.propTypes = {
    description: PropTypes.string,
    isEditMode: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

EpisodeDescription.defaultProps = {
    description: '',
};

export default EpisodeDescription;