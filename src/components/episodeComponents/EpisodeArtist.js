import React from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../editableComponents/EditableInput';

function EpisodeArtist({ artistName, isEditMode, onChange }) {
    return (
        <div className="podcast_artist">
            By&nbsp;
            <EditableInput
                isEditMode={isEditMode}
                onChange={onChange}
                value={artistName}
            />
        </div>
    );
};

EpisodeArtist.propTypes = {
    artistName: PropTypes.string,
    isEditMode: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
};

EpisodeArtist.defaultProps = {
    artistName: '',
};

export default EpisodeArtist;