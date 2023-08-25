import React from "react";
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

export default function Section({options, onLeaveFeedback}) {
    return (
        <div className={css.list}>
            {options.map(key => {
                return (
                    <button className={css.item} key={key} type="button" onClick={() => onLeaveFeedback(key)}>
                        {[key]}
                    </button>
                )
            })}
        </div>
    )
}

Section.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
};