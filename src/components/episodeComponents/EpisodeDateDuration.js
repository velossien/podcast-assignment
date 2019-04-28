import React from 'react';
import PropTypes from 'prop-types';
import EditableDate from '../editableComponents/EditableDate';

function DateDuration({ duration, isEditMode, onDateChange, publishedAt }) {
    const formattedPubDate = publishedAt ? publishedAt.format('ddd, MMM Do, YYYY') : '';

    return (
        <div className="episode_date_duration">
            <EditableDate
                isEditMode={isEditMode}
                onDateChange={onDateChange}
                value={formattedPubDate}
            />
            <span className="episode-time-dot-edit">
                &#183;
            </span>
            <span className="episode_duration">
                {duration} min
            </span>
        </div>
    );
};

DateDuration.propTypes = {
    duration: PropTypes.number,
    isEditMode: PropTypes.bool.isRequired,
    onDateChange: PropTypes.func.isRequired,
    publishedAt: PropTypes.object,
};

DateDuration.defaultProps = {
    duration: 0,
    publishedAt: {},
};

export default DateDuration;