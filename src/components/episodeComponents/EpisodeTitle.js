import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../editableComponents/EditableInput';

function EpisodeTitle({ isEditMode, onChange, title }) {
    return (
        <div className="episode_title">
            <EditableInput
                isEditMode={isEditMode}
                onChange={onChange}
                value={title}
            />
        </div>
    );
};

EpisodeTitle.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    title: PropTypes.string,
};

EpisodeTitle.defaultProps = {
    title: '',
};

export default EpisodeTitle;