import React from 'react';
import PropTypes from 'prop-types';
import EditableImage from '../editableComponents/EditableImage';

function EpisodeImage({ imageUrl, isEditMode, onImageChange }) {
    return (
        <div className="episode_image">
            <img
                alt="Podcast episode"
                src={imageUrl}
            />
            <EditableImage 
                isEditMode={isEditMode}
                onImageChange={onImageChange}
            />
        </div>
    );
};

EpisodeImage.propTypes = {
    onImageChange: PropTypes.func.isRequired,
    imageUrl: PropTypes.string,
    isEditMode: PropTypes.bool.isRequired,
};

EpisodeImage.defaultProps = {
    imageUrl: '',
}

export default EpisodeImage;