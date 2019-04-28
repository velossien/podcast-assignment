import React from 'react';
import PropTypes from 'prop-types';
import DayPickerInput from 'react-day-picker/DayPickerInput';

function EditableDate({ isEditMode, onDateChange, value }) {
    if (isEditMode) {
        return (
            <DayPickerInput
                onDayChange={onDateChange}
                selectedDays={value}
                value={value}
            />
        );
    } else {
        return value;
    }
};

EditableDate.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
    onDateChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};

EditableDate.defaultProps = {
    value: '',
};

export default EditableDate;