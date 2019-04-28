import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

function EditableImage({ isEditMode, onImageChange }) {
    if (isEditMode) {
            return (
              <div className="editable-image-drop-zone">
                <Dropzone 
                    accept="image/*"
                    onDrop={onImageChange}
                >
                  {({getRootProps, getInputProps, isDragReject}) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      {isDragReject && 'Image type not accepted! Try again. :('}
                      {!isDragReject && 'Drag an image in or click me!'}
                    </div>
                  )}
                </Dropzone>
              </div>
            );
    } else {
        return null;
    }
};

EditableImage.propTypes = {
  isEditMode: PropTypes.bool.isRequired,
  onImageChange: PropTypes.func.isRequired,
};

export default EditableImage;