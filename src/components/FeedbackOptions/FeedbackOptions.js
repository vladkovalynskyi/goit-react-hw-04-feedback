import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <div className={css.list}>
            {options.map(option => (
                <button className={css.item} key={option} type="button" onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};