import React, {Component} from "react";

import css from "./FeedbackOptions.module.scss";

class FeedbackOptions extends Component {
    render() {
        return (
            <>
                {Object.keys(this.props.options).map((option) => (
                    <button
                        key={option}
                        className={css.button}
                        onClick={() => this.props.onLeaveFeedback(option)}
                    >
                        {option}
                    </button>
                ))}
            </>
        );
    }
}

export default FeedbackOptions;
